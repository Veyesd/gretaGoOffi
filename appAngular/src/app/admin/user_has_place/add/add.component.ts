import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { UserHasPlaceService } from '../../../services/user_has_place.service';
import { UserHasPlace } from '../../../interfaces/user_has_place';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private TraininHasPlaceService: UserHasPlaceService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
  add(user_id: number, place_id: number): void {



    if (!user_id && !place_id){ return; }
    this.TraininHasPlaceService.addUserHasPlace({ user_id, place_id} as UserHasPlace)
    .subscribe(() => this.goBack());
  }

}
