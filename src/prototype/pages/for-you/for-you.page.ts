import { RouterLink } from "@angular/router";
import { Subscription, fromEvent, map } from "rxjs";
import { Component, ElementRef, input, ViewChild } from "@angular/core";
import { ScrollUsage } from "../../components/scroll-usage/scroll-usage.component";

@Component({
  selector: "for-you-page",
  templateUrl: "./for-you.page.html",
  styleUrls: ["./for-you.page.scss", "./buttons.scss"],
  imports: [RouterLink, ScrollUsage],
})
export class ForYouPage {
  emotionId = input.required<string>();

  @ViewChild("videoPlayer") videoRef!: ElementRef<HTMLVideoElement>;

  private subscription = new Subscription();

  ngAfterViewInit() {
    this.listenSwipeEvents();
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
    // ...
  }

  nextVideo() {
    // ...
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get video() {
    return this.videoRef.nativeElement;
  }
}
