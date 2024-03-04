import { Component, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-stop-loss-app',
  templateUrl: './stop-loss.component.html',
  styleUrls: ['./stop-loss.component.css'],
})
export class StopLossComponent {
  submit = false;
  optout = false;
  error = false;
  constructor(private formBuilder: FormBuilder) {}
  profileForm = this.formBuilder.group({
    Email: ['', Validators.required],
    Password: [''],
  });
  onSubmit() {
    if (this.profileForm.valid) {
      this.submit = true;
    }
  }
  opt() {
    this.optout = true;
  }

  close() {
    this.submit = false;
    this.optout = false;
  }
}
