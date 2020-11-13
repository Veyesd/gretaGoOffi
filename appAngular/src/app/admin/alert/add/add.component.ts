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
  initdata={status:true};
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private alertService: AlertService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  onEnabledToggleChange(){
    this.initdata.status=!this.initdata.status;
  }
  goBack(): void {
    this.location.back();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(t => {
        this.users = t['data'];
      });
  }

  add(status: boolean,
    lng: number,
    lat: number,
    user_id: number
    
    ): void {

      status=this.initdata.status;

    if (!lng || !lat ||  !user_id) { return; }
    this.alertService.addAlert({
      lng,
      lat,
      status,
      user_id
    } as Alert)
      .subscribe(() => this.goBack());
  }

}
