import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user';
import { Training } from '../../../interfaces/training';
import { TrainingService } from '../../../services/formations.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
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
    .subscribe(t => this.user = t);
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.userService.updateUser(this.user)
    .subscribe(() => this.goBack());
  }
}
