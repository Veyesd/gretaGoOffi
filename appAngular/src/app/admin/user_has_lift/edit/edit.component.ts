import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserHasLiftService } from '../../../services/user_has_lift.service';
import { Location } from '@angular/common';
import { UserHasLift } from 'src/app/interfaces/user_has_lift';
import { User } from '../../../interfaces/user';
import { UsersService } from '../../../services/users.service';
import { Lift } from '../../../interfaces/lift';
import { LiftService } from '../../../services/lift.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  UserHasLift: UserHasLift;
  status: string;
  users: User[];
  lifts: Lift[];
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private liftService: LiftService,
    private UserHasLiftService: UserHasLiftService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUserHasLift();
    this.getUsers();
    this.getLifts();
  }
  getUserHasLift(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.UserHasLiftService.getUserHasLift(id)
    .subscribe(t => this.UserHasLift = t['data']);
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(t => {
        this.users = t['data'];
      });
  }
  getLifts(): void {
    this.liftService.getLifts()
      .subscribe(t => {
        this.lifts = t['data'];
      });
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.UserHasLiftService.updateUserHasLift(this.UserHasLift)
    .subscribe(() => this.goBack());
  }

}
