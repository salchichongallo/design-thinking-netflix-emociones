import { RouterLink } from "@angular/router";
import { Component, input } from "@angular/core";

@Component({
  selector: "for-you-page",
  templateUrl: "./for-you.page.html",
  styleUrls: ["./for-you.page.scss", "./buttons.scss"],
  imports: [RouterLink],
})
export class ForYouPage {
  emotionId = input.required<string>();
}
