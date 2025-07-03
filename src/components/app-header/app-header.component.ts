import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header",
  styleUrl: "./app-header.component.scss",
  templateUrl: "./app-header.component.html",
  imports: [RouterLink],
})
export class AppHeaderComponent {}
