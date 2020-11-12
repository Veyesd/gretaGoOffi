import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { UserHasLiftService } from '../../../services/user_has_lift.service';
import { UserHasLift } from '../../../interfaces/user_has_lift';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private UserHasLiftService: UserHasLiftService,
    private location: Location
  ) { }

  ngOnInit(): void {
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
