import { Router } from "@angular/router";
import { Component, inject } from "@angular/core";
import { EmotionOptionComponent } from "../../components/emotion-option/emotion-option.component";
import { AppHeaderComponent } from "../../components/app-header/app-header.component";

@Component({
  selector: "home-page",
  templateUrl: "./home.page.html",
  styleUrl: "./home.page.scss",
  imports: [AppHeaderComponent, EmotionOptionComponent],
})
export class HomePage {
  private router = inject(Router);

  watch(movieName: string) {
    return this.router.navigate(["/video", movieName]);
  }
}
