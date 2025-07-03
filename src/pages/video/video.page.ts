import { NgIf } from "@angular/common";
import {
  input,
  signal,
  computed,
  Component,
  ViewChild,
  ElementRef,
} from "@angular/core";

import { getByName } from "../../videos";
import { AppHeaderComponent } from "../../components/app-header/app-header.component";
import { VideoSurveyComponent } from "../../components/video-survey/video-survey.component";
import { InstructionsModalComponent } from "../../components/instructions-modal/instructions-modal.component";

import { FullScreenService } from "./full-screen.service";

@Component({
  selector: "video-page",
  templateUrl: "./video.page.html",
  styleUrl: "./video.page.scss",
  imports: [
    NgIf,
    VideoSurveyComponent,
    AppHeaderComponent,
    InstructionsModalComponent,
  ],
})
export class VideoPage {
  videoName = input.required<string>();

  video = computed(() => getByName(this.videoName()));

  videoUrl = computed(() => this.video().getUrl());

  finished = signal(false);

  @ViewChild("videoPlayer") videoPlayerRef!: ElementRef<HTMLVideoElement>;

  ready = signal(false);

  async play() {
    const videoElement = this.videoPlayerRef.nativeElement;
    await FullScreenService.enter(videoElement);
    videoElement.play();
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

  onReady() {
    this.ready.set(true);
    setTimeout(() => this.play(), 0);
  }
}
