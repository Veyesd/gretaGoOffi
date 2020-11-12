import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from 'src/app/interfaces/training';
import { User } from 'src/app/interfaces/user';
import { TrainingService } from 'src/app/services/formations.service';
import { UsersService } from 'src/app/services/users.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  user: User;
  trainings: Training[];

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private trainingService: TrainingService,
    private location: Location) { }

  ngOnInit(): void {
    this.getUser();
    this.getTrainings()
  }
  getTrainings(): void{
    this.trainingService.getTrainings()
    .subscribe(trainings => this.trainings = trainings['data'])
  }
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
    .subscribe(t => {this.user =t['data'];

    });
  }
  goBack(): void{
    this.location.back();
  }
  save(address, phone, training): void{
    this.user.address = address;
    this.user.phone = phone;
    this.user.training_id = parseInt(training, 10 );
    this.userService.updateUser(this.user)
    .subscribe(() => this.goBack());
  }

}
