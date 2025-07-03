import { NgIf } from "@angular/common";
import {
  input,
  signal,
  computed,
  Component,
  AfterViewInit,
} from "@angular/core";
import { AppHeaderComponent } from "../../components/app-header/app-header.component";
import { VideoSurveyComponent } from "../../components/video-survey/video-survey.component";

@Component({
  selector: "video-page",
  templateUrl: "./video.page.html",
  styleUrl: "./video.page.scss",
  imports: [NgIf, VideoSurveyComponent, AppHeaderComponent],
})
export class VideoPage implements AfterViewInit {
  videoName = input.required();

  videoUrl = computed(() => `/videos/${this.videoName()}`);

  finished = signal(false);

  ngAfterViewInit() {
    document.querySelector("video")?.requestFullscreen();
  }

  onFinish() {
    document.exitFullscreen();
    this.finished.set(true);
  }
}
