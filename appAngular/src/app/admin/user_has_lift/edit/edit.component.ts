import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserHasLiftService } from '../../../services/user_has_lift.service';
import { Location } from '@angular/common';
import { UserHasLift } from 'src/app/interfaces/user_has_lift';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  UserHasLift: UserHasLift;
  status: string;

  constructor(
    private route: ActivatedRoute,
    private UserHasLiftService: UserHasLiftService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUserHasLift();
  }
  getUserHasLift(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.UserHasLiftService.getUserHasLift(id)
    .subscribe(t => this.UserHasLift = t['data']);
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.UserHasLiftService.updateUserHasLift(this.UserHasLift)
    .subscribe(() => this.goBack());
  }

}
