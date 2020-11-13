import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AlertService } from '../../../services/alert.service';
import { Alert } from '../../../interfaces/alert';
import { User } from '../../../interfaces/user';
import { UsersService } from '../../../services/users.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  users: User[];
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private AlertService: AlertService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  goBack(): void {
    this.location.back();
  }

  getUser(): void {

    this.userService.getUsers()
      .subscribe(t => {
        // t['data'].birthday = format( new Date(2014, 1, 11), 'yyyy-MM-dd' );
        this.users = t['data'];
      });
  }

  add(lng: number,
    lat: number,
    status: boolean,
    user_id: number): void {



      console.log(lng,lat,user_id,status);
    if (!lng || !lat ||  !user_id) { return; }
    this.AlertService.addAlert({
      lng,
      lat,
      status,
      user_id
    } as Alert)
      .subscribe(() => this.goBack());
  }

}
