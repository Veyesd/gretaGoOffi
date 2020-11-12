import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AlertService } from '../../../services/alert.service';
import { Alert } from '../../../interfaces/alert';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private AlertService: AlertService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
  add( lng: number,
    lat: number,
    status:  boolean,
    user_id: number): void {
 


    if (!lng&&!lat&&!status&&!user_id){ return; }
    this.AlertService.addAlert({ 
      lng,
      lat,
      status,
      user_id} as Alert)
    .subscribe(() => this.goBack());
  }

}
