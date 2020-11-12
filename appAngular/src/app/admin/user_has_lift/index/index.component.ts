import { Component, OnInit } from '@angular/core';
import { UserHasLift } from '../../../interfaces/user_has_lift';
import { UserHasLiftService } from '../../../services/user_has_lift.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  datas: UserHasLift[];
  constructor( private UserHasLiftService : UserHasLiftService) { }

  ngOnInit(): void {

    this.getUserHasLifts();
  }
  getUserHasLifts(): void {
    this.UserHasLiftService.getUserHasLifts()
    .subscribe(datas => this.datas = datas["data"]
    
    );
  }

  delete(UserHasLift: UserHasLift): void {
    this.datas = this.datas.filter(p => p !== UserHasLift);
    this.UserHasLiftService.deleteUserHasLift(UserHasLift).subscribe();
  }

}
