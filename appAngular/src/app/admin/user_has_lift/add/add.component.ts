import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { UserHasLiftService } from '../../../services/user_has_lift.service';
import { UserHasLift } from '../../../interfaces/user_has_lift';
import { User } from '../../../interfaces/user';
import { UsersService } from '../../../services/users.service';
import { Lift } from '../../../interfaces/lift';
import { LiftService } from '../../../services/lift.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
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
    this.getUsers();
    this.getLifts();
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
  goBack(): void {
    this.location.back();
  }
  add(driver: boolean,user_id: number, lift_id: number): void {


    if (!user_id && !lift_id){ return; }
    this.UserHasLiftService.addUserHasLift({ driver,user_id, lift_id} as UserHasLift)
    .subscribe(() => this.goBack());
  }

}
