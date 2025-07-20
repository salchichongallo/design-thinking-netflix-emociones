import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { videos } from "../../../landing/videos";

@Component({
  selector: "home-page",
  templateUrl: "./home.page.html",
  styleUrl: "./home.page.scss",
  imports: [RouterLink],
})
export class HomePage {
  videos = videos;
}
