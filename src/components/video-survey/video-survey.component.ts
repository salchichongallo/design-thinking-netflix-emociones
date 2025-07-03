import { NgIf } from "@angular/common";
import { Router } from "@angular/router";
import { Component, effect, inject, signal } from "@angular/core";
import { EmotionOptionComponent } from "../emotion-option/emotion-option.component";

@Component({
  selector: "video-survey",
  templateUrl: "./video-survey.component.html",
  styleUrl: "./video-survey.component.scss",
  imports: [EmotionOptionComponent, NgIf],
})
export class VideoSurveyComponent {
  private router = inject(Router);

  hasResponse = signal(false);

  redirectEffect = effect(() => {
    if (this.hasResponse()) {
      setTimeout(() => {
        this.router.navigate(["/"]);
      }, 3000);
    }
  });

  onYes() {
    this.hasResponse.set(true);
  }

  onNo() {
    this.hasResponse.set(true);
  }
}
