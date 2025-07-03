import { NgIf } from "@angular/common";
import { Router } from "@angular/router";
import { Component, effect, inject, input, signal } from "@angular/core";

import { AppVideo } from "../../videos";
import { EmotionOptionComponent } from "../emotion-option/emotion-option.component";

@Component({
  selector: "video-survey",
  templateUrl: "./video-survey.component.html",
  styleUrl: "./video-survey.component.scss",
  imports: [EmotionOptionComponent, NgIf],
})
export class VideoSurveyComponent {
  private router = inject(Router);

  video = input.required<AppVideo>();

  hasResponse = signal(false);

  redirectEffect = effect(() => {
    if (this.hasResponse()) {
      setTimeout(() => {
        this.router.navigate(["/"]);
      }, 3000);
    }
  });

  onYes() {
    console.log(`YES - ${this.video().icon} - ${this.video().text}`);
    this.hasResponse.set(true);
  }

  onNo() {
    console.log(`NO - ${this.video().icon} - ${this.video().text}`);
    this.hasResponse.set(true);
  }
}
