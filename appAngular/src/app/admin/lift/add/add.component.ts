import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { LiftService } from '../../../services/lift.service';
import { Lift } from '../../../interfaces/lift';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  initdata={status:true};
  constructor(
    private route: ActivatedRoute,
    private LiftService: LiftService,
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
  add(
    date_departure: number,
    lat_departure:number,
    lng_departure: number,
    lat_arrival: number,
    lng_arrival:number,
    take: number,
    status: boolean): void {

      status=this.initdata.status;

    if ( !date_departure&&!lat_departure&&!lng_departure&&!lat_arrival&&!lng_arrival&&!status){ return; }
    this.LiftService.addLift({ date_departure,lat_departure,lng_departure,lat_arrival,lng_arrival,take,status} as Lift)
    .subscribe(() => this.goBack());
  }

}
