import { NgIf } from "@angular/common";
import {
  input,
  signal,
  computed,
  Component,
  AfterViewInit,
} from "@angular/core";

import { getByName } from "../../videos";
import { AppHeaderComponent } from "../../components/app-header/app-header.component";
import { VideoSurveyComponent } from "../../components/video-survey/video-survey.component";

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

  ngAfterViewInit() {
    document.querySelector("video")?.requestFullscreen();
  }

  onFinish() {
    document.exitFullscreen();
    this.finished.set(true);
  }
}
