import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user';
import { Location } from "@angular/common";
import { Training } from '../../../interfaces/training';
import { TrainingService } from '../../../services/formations.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  trainings: Training[];

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private trainingService: TrainingService,
    private loc: Location
  ) { }

  ngOnInit(): void {
    this.getTrainings()
  }
  getTrainings(){
    this.trainingService.getTrainings()
    .subscribe(trainings => this.trainings = trainings["data"])
  }
  goBack(): void {
    this.loc.back();
  }
  add(firstname: string, lastname: string, address: string, birthday: Date, phone: string, email: string, training_id: number): void {
    firstname = firstname.trim();
    lastname = lastname.trim();
    address = address.trim();
    phone = phone.trim();
    email = email.trim();
    const password: string = this.generatePassword()

    if(!firstname && !lastname){
      alert("Des champs obligatoire ne sont pas remplis")
      return; }
    this.userService.addUser({ firstname, lastname, address, password, birthday, phone, email,training_id} as User)
    .subscribe(() => this.goBack());
  }

  private generatePassword(): string {

    const dictionary = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*+!@;?#$&';
    let newPassword: string;

    for (let i = 0; i < 22; i++) {
      newPassword += dictionary[Math.floor(Math.random() * (dictionary.length-1))];
    }
    return newPassword;
  }
}

