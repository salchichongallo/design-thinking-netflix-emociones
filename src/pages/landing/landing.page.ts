import { NgIf } from "@angular/common";
import { Component, signal } from "@angular/core";

import { AppHeaderComponent } from "../../components/app-header/app-header.component";
import { EmotionOptionComponent } from "../../components/emotion-option/emotion-option.component";
import { EmailModalComponent } from "../../components/email-modal/email-modal.component";

@Component({
  selector: "landing-page",
  templateUrl: "./landing.page.html",
  styleUrl: "./landing.page.scss",
  imports: [
    NgIf,
    AppHeaderComponent,
    EmotionOptionComponent,
    EmailModalComponent,
  ],
})
export class LandingPage {
  interested = signal(false);

  onInterested() {
    this.interested.set(true);
  }
}
