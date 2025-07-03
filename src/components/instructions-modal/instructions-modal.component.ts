import { Component, output } from "@angular/core";
import { AppModalComponent } from "../app-modal/app-modal.component";

@Component({
  selector: "instructions-modal",
  templateUrl: "./instructions-modal.component.html",
  styleUrl: "./instructions-modal.component.scss",
  imports: [AppModalComponent],
})
export class InstructionsModalComponent {
  onOk = output<void>();
}
