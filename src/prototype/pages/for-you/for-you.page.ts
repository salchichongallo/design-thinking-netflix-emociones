import { NgIf, NgStyle } from "@angular/common";
import { Router, RouterLink } from "@angular/router";
import { Subscription, fromEvent, map } from "rxjs";
import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  OnChanges,
  signal,
  SimpleChanges,
  ViewChild,
} from "@angular/core";

import { getById, videos } from "../../../landing/videos";
import { ScrollUsage } from "../../components/scroll-usage/scroll-usage.component";
import { AppModalComponent } from "../../../landing/components/app-modal/app-modal.component";

@Component({
  selector: "for-you-page",
  templateUrl: "./for-you.page.html",
  styleUrls: ["./for-you.page.scss", "./buttons.scss"],
  imports: [RouterLink, ScrollUsage, NgStyle, AppModalComponent, NgIf],
})
export class ForYouPage implements AfterViewInit, OnChanges {
  emotionId = input.required<string>();

  progress = signal("0%");

  videoInfo = computed(() => getById(this.emotionId()));

  router = inject(Router);

  finished = signal(false);

  @ViewChild("videoPlayer") videoRef!: ElementRef<HTMLVideoElement>;

  private subscription = new Subscription();

  private animationFrameId: number | null = null;

  ngAfterViewInit() {
    this.listenSwipeEvents();
    this.listenProgress();
  }

  ngOnChanges(changes: SimpleChanges) {
    const shouldResetState = !changes["emotionId"].firstChange;
    if (shouldResetState) {
      this.ngOnDestroy();
      this.ngAfterViewInit();
    }
  }

  private listenSwipeEvents() {
    let startY = 0;
    const swipeTreshold = 10;
    const touchStart$ = fromEvent<TouchEvent>(this.video, "touchstart").pipe(
      map((event) => event.touches[0].clientY)
    );
    const touchEnd$ = fromEvent<TouchEvent>(this.video, "touchend").pipe(
      map((event) => event.changedTouches[0].clientY)
    );
    this.subscription.add(touchStart$.subscribe((y) => (startY = y)));
    this.subscription.add(
      touchEnd$.subscribe((endY) => {
        const deltaY = startY - endY;
        if (deltaY > swipeTreshold) {
          this.onSwipeUp();
        } else if (deltaY < -swipeTreshold) {
          this.onSwipeDown();
        }
      })
    );
  }

  private onSwipeUp() {
    this.previousVideo();
  }

  private onSwipeDown() {
    this.nextVideo();
  }

  previousVideo() {
    const index = videos.indexOf(this.videoInfo());
    const prevVideo = videos.at(index - 1)!;
    return this.router.navigate(["/para-ti", prevVideo.id]);
  }

  nextVideo() {
    const index = videos.indexOf(this.videoInfo());
    const nextIndex = index === videos.length - 1 ? 0 : index + 1;
    const nextVideo = videos.at(nextIndex)!;
    return this.router.navigate(["/para-ti", nextVideo.id]);
  }

  private listenProgress() {
    const checkVideoEnded = () => {
      if (this.video.duration && this.video.currentTime) {
        const progress = (this.video.currentTime / this.video.duration) * 100;
        this.progress.set(`${progress}%`);

        const remaining = this.video.duration - this.video.currentTime;
        if (remaining <= 0.1) {
          this.onFinish();
          return;
        }
      }
      this.animationFrameId = requestAnimationFrame(checkVideoEnded);
    };

    this.animationFrameId = requestAnimationFrame(checkVideoEnded);
  }

  private onFinish() {
    this.finished.set(true);
  }

  watchMovie() {
    const url = this.videoInfo().netflixUrl;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  keepExploring() {
    return this.nextVideo();
  }

  ngOnDestroy() {
    this.finished.set(false);
    this.progress.set("0%");
    this.subscription.unsubscribe();
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  private pause() {
    this.video.pause();
  }

  private play() {
    this.video.play();
  }

  get isPlaying() {
    return !this.video.paused && !this.video.ended;
  }

  get video() {
    return this.videoRef.nativeElement;
  }
}
