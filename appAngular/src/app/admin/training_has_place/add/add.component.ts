import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { TrainingHasPlaceService } from '../../../services/training_has_place.service';
import { TrainingHasPlace } from '../../../interfaces/training_has_place';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private TraininHasPlaceService: TrainingHasPlaceService,
    private location: Location
  ) { }

  ngOnInit(): void {
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
