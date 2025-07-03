import { Component } from "@angular/core";
import { EmotionOptionComponent } from "../../components/emotion-option/emotion-option.component";

@Component({
  selector: "home-page",
  templateUrl: "./home.page.html",
  styleUrl: "./home.page.scss",
  imports: [EmotionOptionComponent],
})
export class HomePage {
  watch(movieName: string) {
    alert(movieName);
  }
}
