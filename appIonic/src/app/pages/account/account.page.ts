import { Component, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Training } from "src/app/interfaces/training";
import { User } from "src/app/interfaces/user";
import { TrainingService } from "src/app/services/formations.service";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"],
})
export class AccountPage implements OnInit, OnChanges {
  @Output() public header = true;
  user: User;
  trainings: Training[];
  training: Training;

  public form = [
    { title: "Formation : ", val: "", isChecked: true },
    { title: "Anniversaire : ", val: "", isChecked: false },
    { title: "Téléphone : ", val: "", isChecked: false },
    { title: "Adresse : ", val: "", isChecked: false },
    { title: "Email : ", val: "", isChecked: false },
    { title: "Permis : ", val: "", isChecked: false },
  ];
  showTrip = false;
  constructor(
    private userService: UsersService,
    private trainingService: TrainingService,
    private formBuilder: FormBuilder
  ) {}

  async ngOnInit() {
    this.showTrip = false;
    const id = localStorage.getItem("id");
    this.getUser(id);
  }
  ngOnChanges(change: SimpleChanges) {
    
  }
  getUser(id){
    this.userService.getUser(parseInt(id)).subscribe((t) => {
      console.log("voici le t : ", t);
      this.user = t["data"];
      this.trainingService
        .getTrainings()
        .subscribe((trainings) => (this.trainings = trainings["data"]));
      this.form[1].val = this.user.birthday.toString();
      this.form[2].val = this.user.phone;
      this.form[3].val = this.user.address;
      this.form[4].val = this.user.email;
      this.trainingService.getTraining(this.user.training_id).subscribe((t) => {
        this.training = t["data"];
        this.form[0].val = this.training.name;
      });
    });
  }
  show() {
    this.showTrip = !this.showTrip;
  }
  getSelected(status: string) {}

}
