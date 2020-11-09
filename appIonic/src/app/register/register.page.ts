import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Location } from "@angular/common";
import { TrainingService } from "../services/formations.service";
import { Training } from "../interfaces/training";
import { UsersService } from "../services/users.service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  public header = false;
  credentialsForm: FormGroup;
  trainings: Training[];
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private location: Location,
    private trainingService: TrainingService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.getTrainings();
    this.credentialsForm = this.formBuilder.group({
      firstname: ["", [Validators.required, Validators.minLength(6)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      training_id: [, [Validators.required, Validators.minLength(6)]],
    });
  }
  getTrainings() {
    this.trainingService
      .getTrainings()
      .subscribe((trainings) => (this.trainings = trainings["data"]));
  }
  register() {
    const emailGreta = this.credentialsForm.value.email.indexOf("@greta-");
    if (
      emailGreta !== -1 &&
      this.credentialsForm.value.email &&
      this.credentialsForm.value.password &&
      this.credentialsForm.value.firstname
    ) {
      this.authService.register(this.credentialsForm.value);
    } else{
      if (emailGreta === -1) {
        this.showAlert("Il faut une adresse email du greta pour créer un compte");
      }else {
         this.showAlert("Des informations sont manquantes");
      }
    }
  }
  goBack(): void {
    this.location.back();
  }
  showAlert(msg) {
    const alert = this.alertController.create({
      message: "",
      header: msg,
      buttons: ["OK"],
    });
    alert.then((alert) => alert.present());
  }
}
