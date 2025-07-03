import { NgIf } from "@angular/common";
import { Router, RouterLink } from "@angular/router";
import { Component, inject, input, signal } from "@angular/core";

import { AppVideo } from "../../videos";
import { EmotionOptionComponent } from "../emotion-option/emotion-option.component";

@Component({
  selector: "video-survey",
  templateUrl: "./video-survey.component.html",
  styleUrl: "./video-survey.component.scss",
  imports: [EmotionOptionComponent, NgIf, RouterLink],
})
export class VideoSurveyComponent {
  private router = inject(Router);

  video = input.required<AppVideo>();

  response = signal("");

  onYes() {
    this.response.set("Sí");
  }

  onNo() {
    this.response.set("No");
  }
}
