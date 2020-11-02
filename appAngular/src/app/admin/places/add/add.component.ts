import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { PlacesService } from '../../../services/places.service';
import { Place } from '../../../interfaces/place';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
  add(name: string, address: string, lat: number, lng: number): void {
    name = name.trim();
    address = address.trim();

    if (!name && !address){ return; }
    this.placesService.addPlace({ name, address, lat, lng} as Place)
    .subscribe(() => this.goBack());
  }

}
