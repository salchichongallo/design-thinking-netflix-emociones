import { Component, input } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./app-modal.component.html",
  styleUrl: "./app-modal.component.scss",
})
export class AppModalComponent {
  transparent = input(false);
}
