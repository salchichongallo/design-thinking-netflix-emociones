import { NgIf } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
  selector: "scroll-usage",
  templateUrl: "./scroll-usage.component.html",
  styleUrl: "./scroll-usage.component.scss",
  imports: [NgIf],
})
export class ScrollUsage {
  shown = signal(!!window.sessionStorage.getItem("SCROLL_USAGE_SHOWN"));

  onTap() {
    this.shown.set(true);
    window.sessionStorage.setItem("SCROLL_USAGE_SHOWN", "true");
  }
}
