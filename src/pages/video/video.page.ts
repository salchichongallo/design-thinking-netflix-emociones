import { NgIf } from "@angular/common";
import {
  input,
  signal,
  computed,
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from "@angular/core";

import { getByName } from "../../videos";
import { AppHeaderComponent } from "../../components/app-header/app-header.component";
import { VideoSurveyComponent } from "../../components/video-survey/video-survey.component";

import { FullScreenService } from "./full-screen.service";

@Component({
  selector: "video-page",
  templateUrl: "./video.page.html",
  styleUrl: "./video.page.scss",
  imports: [NgIf, VideoSurveyComponent, AppHeaderComponent],
})
export class VideoPage implements AfterViewInit {
  videoName = input.required<string>();

  video = computed(() => getByName(this.videoName()));

  videoUrl = computed(() => this.video().getUrl());

  finished = signal(false);

  @ViewChild("videoPlayer") videoPlayerRef!: ElementRef<HTMLVideoElement>;

  async ngAfterViewInit() {
    const videoElement = this.videoPlayerRef.nativeElement;
    await FullScreenService.enter(videoElement);
    const checkVideoEnded = () => {
      if (videoElement.duration && videoElement.currentTime) {
        const remaining = videoElement.duration - videoElement.currentTime;
        if (remaining <= 0.1) {
          this.onFinish();
          return;
        }
      }
      requestAnimationFrame(checkVideoEnded);
    };

    requestAnimationFrame(checkVideoEnded);
  }

  async onFinish() {
    await FullScreenService.exit();
    this.finished.set(true);
  }
}
