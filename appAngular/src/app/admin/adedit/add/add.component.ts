import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AdminService } from '../../../services/admin.service';
import { Admin } from '../../../interfaces/admin';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  initdata={status:true};
  constructor(
    private route: ActivatedRoute,
    private AdminService: AdminService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  onEnabledToggleChange(){
    this.initdata.status=!this.initdata.status;
  }
  goBack(): void {
    this.location.back();
  }
  add(firstname:  string,
    lastname:  string,
    email:  string,
    password:  string,
    status: boolean): void {
      firstname = firstname.trim();
      lastname = lastname.trim();
      email = email.trim();
      password = password.trim();
      status=this.initdata.status;

    if (!firstname || !password || !email){ return; }
    this.AdminService.addAdmin({ firstname,lastname,email,password,status } as Admin)
    .subscribe(() => this.goBack());
  }

}
