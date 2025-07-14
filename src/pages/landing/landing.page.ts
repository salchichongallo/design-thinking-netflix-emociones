import { Component } from "@angular/core";
import { AppHeaderComponent } from "../../components/app-header/app-header.component";
import { EmotionOptionComponent } from "../../components/emotion-option/emotion-option.component";

@Component({
  selector: "landing-page",
  templateUrl: "./landing.page.html",
  styleUrl: "./landing.page.scss",
  imports: [AppHeaderComponent, EmotionOptionComponent],
})
export class LandingPage {}
