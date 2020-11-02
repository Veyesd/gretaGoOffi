import { Component, OnInit } from '@angular/core';
import { Place } from '../../../interfaces/place';
import { PlacesService } from '../../../services/places.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  places: Place[];
  constructor( private placeService : PlacesService) { }

  ngOnInit(): void {
    this.getPlaces();
  }
  getPlaces(): void {
    this.placeService.getPlaces()
    .subscribe(places => this.places = places["data"]);
  }

  delete(place: Place): void {
    this.places = this.places.filter(p => p !== place);
    this.placeService.deletePlace(place).subscribe();
  }

}
