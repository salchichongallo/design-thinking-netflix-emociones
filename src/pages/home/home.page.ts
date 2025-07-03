import { Router } from "@angular/router";
import { Component, inject } from "@angular/core";
import { EmotionOptionComponent } from "../../components/emotion-option/emotion-option.component";

@Component({
  selector: "home-page",
  templateUrl: "./home.page.html",
  styleUrl: "./home.page.scss",
  imports: [EmotionOptionComponent],
})
export class HomePage {
  private router = inject(Router);

  watch(movieName: string) {
    return this.router.navigate(["/video", movieName]);
  }
}
