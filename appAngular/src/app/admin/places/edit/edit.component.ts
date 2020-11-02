import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../../interfaces/place';
import { Location } from '@angular/common';
import { PlacesService } from '../../../services/places.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  place: Place;
  constructor(
    private route: ActivatedRoute,
    private placeService: PlacesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPlace();
  }
  getPlace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.placeService.getPlace(id)
    .subscribe(t => this.place = t);
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.placeService.updatePlace(this.place)
    .subscribe(() => this.goBack());
  }
}
