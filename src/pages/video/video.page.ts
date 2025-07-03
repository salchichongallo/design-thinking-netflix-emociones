import { Component, input } from "@angular/core";

@Component({
  selector: "video-page",
  templateUrl: "./video.page.html",
})
export class VideoPage {
  videoName = input.required();
}
