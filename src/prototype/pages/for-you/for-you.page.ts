import { RouterLink } from "@angular/router";
import { Component, input } from "@angular/core";
import { ScrollUsage } from "../../components/scroll-usage/scroll-usage.component";

@Component({
  selector: "for-you-page",
  templateUrl: "./for-you.page.html",
  styleUrls: ["./for-you.page.scss", "./buttons.scss"],
  imports: [RouterLink, ScrollUsage],
})
export class ForYouPage {
  emotionId = input.required<string>();
}
