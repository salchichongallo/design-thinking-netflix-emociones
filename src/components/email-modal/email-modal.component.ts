import { NgIf } from "@angular/common";
import { Component, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AppModalComponent } from "../app-modal/app-modal.component";

@Component({
  selector: "email-modal",
  templateUrl: "./email-modal.component.html",
  styleUrl: "./email-modal.component.scss",
  imports: [AppModalComponent, NgIf, ReactiveFormsModule],
})
export class EmailModalComponent {
  submitted = signal(false);

  formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
  });

  submit() {
    if (this.form.valid) {
      this.submitted.set(true);
    }
  }
}
