import { NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Component, input, signal } from "@angular/core";

import { AppVideo } from "../../videos";
import { AppModalComponent } from "../app-modal/app-modal.component";
import { EmotionOptionComponent } from "../emotion-option/emotion-option.component";

@Component({
  selector: "video-survey",
  templateUrl: "./video-survey.component.html",
  styleUrl: "./video-survey.component.scss",
  imports: [EmotionOptionComponent, NgIf, RouterLink, AppModalComponent],
})
export class VideoSurveyComponent {
  video = input.required<AppVideo>();

  response = signal("");

  onYes() {
    this.response.set("Sí");
  }

  onNo() {
    this.response.set("No");
  }
}
