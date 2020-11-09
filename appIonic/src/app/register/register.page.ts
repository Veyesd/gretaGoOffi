import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Location } from "@angular/common";
import { TrainingService } from "../services/formations.service";
import { Training } from "../interfaces/training";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  credentialsForm: FormGroup;
  trainings: Training[];
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private location: Location,
    private trainingService: TrainingService
  ) {}

  ngOnInit() {
    this.getTrainings();
    this.credentialsForm = this.formBuilder.group({
      firstname: ["", [Validators.required, Validators.minLength(6)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      training: ["", [Validators.required, Validators.minLength(6)]],
    });
  }
  getTrainings() {
    this.trainingService
      .getTrainings()
      .subscribe((trainings) => (this.trainings = trainings["data"]));
  }
  register() {
    this.authService.register(this.credentialsForm.value).subscribe((res) => {
      // Call Login to automatically login the new user
      this.authService.login(this.credentialsForm.value).subscribe();
    });
  }
  goBack(): void {
    this.location.back();
  }
}
