import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { UserHasPlaceService } from '../../../services/user_has_place.service';
import { UserHasPlace } from '../../../interfaces/user_has_place';
import { User } from '../../../interfaces/user';
import { UsersService } from '../../../services/users.service';
import { Place } from '../../../interfaces/place';
import { PlacesService } from '../../../services/places.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  users: User[];
  places: Place[];
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private placesService: PlacesService,
    private TraininHasPlaceService: UserHasPlaceService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getPlaces();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(t => {
        this.users = t['data'];
      });
  }

  getPlaces(): void {
    this.placesService.getPlaces()
      .subscribe(t => {
        this.places = t['data'];
      });
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
