import { Component, OnInit, Output } from "@angular/core";
import { Location } from "@angular/common";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { UsersService } from "../services/users.service";
import { User } from "../interfaces/user";

@Component({
  selector: "app-password",
  templateUrl: "./password.page.html",
  styleUrls: ["./password.page.scss"],
})
export class PasswordPage implements OnInit {
  @Output() public header = false;
  credentialsForm: FormGroup;
  user: User;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      newPassword: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    console.log("Soumission");
    console.log(this.credentialsForm.value);
    this.userService.getUserEmail(this.credentialsForm.value.email).subscribe(t => this.user = t);
    console.log("l'utilisateur a modifier : ", this.user);
    this.userService.updateUser(this.user).subscribe(() => this.goBack());
    console.log("l'utilisateur modifié : ", this.user);
    this.authService.login(this.credentialsForm.value);
  }
  goBack(): void {
    this.location.back();
  }
}
