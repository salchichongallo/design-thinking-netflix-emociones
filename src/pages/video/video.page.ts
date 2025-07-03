import { AfterViewInit, Component, computed, input } from "@angular/core";
import { AppHeaderComponent } from "../../components/app-header/app-header.component";

@Component({
  selector: "video-page",
  templateUrl: "./video.page.html",
  styleUrl: "./video.page.scss",
  imports: [AppHeaderComponent],
})
export class VideoPage implements AfterViewInit {
  videoName = input.required();

  videoUrl = computed(() => `/videos/${this.videoName()}`);

  ngAfterViewInit() {
    document.querySelector("video")?.requestFullscreen();
  }

  onFinish() {
    document.exitFullscreen();
    alert("Finished!");
  }
}
