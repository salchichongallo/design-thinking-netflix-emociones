import { Component, input, output } from "@angular/core";

@Component({
  selector: "emotion-option",
  templateUrl: "./emotion-option.component.html",
  styleUrl: "./emotion-option.component.scss",
})
export class EmotionOptionComponent {
  icon = input.required();
  text = input.required();
  active = input(false);

  onClick = output<void>();
}
