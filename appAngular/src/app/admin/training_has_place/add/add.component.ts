import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { TrainingHasPlaceService } from '../../../services/training_has_place.service';
import { TrainingHasPlace } from '../../../interfaces/training_has_place';
import { Place } from '../../../interfaces/place';
import { PlacesService } from '../../../services/places.service';
import { Training } from '../../../interfaces/training';
import { TrainingService } from '../../../services/training.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  places: Place[];
  trainings: Training[];
  constructor(
    private route: ActivatedRoute,
    private TraininHasPlaceService: TrainingHasPlaceService,
    private trainingService: TrainingService,
    private placesService: PlacesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPlaces();
    this.getTrainings();
  }
  getPlaces(): void {
    this.placesService.getPlaces()
      .subscribe(t => {
        this.places = t['data'];
      });
  }
  getTrainings(): void {
    this.trainingService.getTrainings()
      .subscribe(t => {
        this.trainings = t['data'];
      });
  }


  goBack(): void {
    this.location.back();
  }
  add(training_id: number, place_id: number): void {



    if (!training_id && !place_id){ return; }
    this.TraininHasPlaceService.addTrainingHasPlace({ training_id, place_id} as TrainingHasPlace)
    .subscribe(() => this.goBack());
  }

}
