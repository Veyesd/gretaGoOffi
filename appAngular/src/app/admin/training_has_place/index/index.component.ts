import { Component, OnInit } from '@angular/core';
import { TrainingHasPlace } from '../../../interfaces/training_has_place';
import { TrainingHasPlaceService } from '../../../services/training_has_place.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  datas: TrainingHasPlace[];
  constructor( private TrainingHasPlaceService : TrainingHasPlaceService) { }

  ngOnInit(): void {

    this.getTrainingHasPlaces();
  }
  getTrainingHasPlaces(): void {
    this.TrainingHasPlaceService.getTrainingHasPlaces()
    .subscribe(datas => this.datas = datas["data"]
    
    );
  }

  delete(TrainingHasPlace: TrainingHasPlace): void {
    this.datas = this.datas.filter(p => p !== TrainingHasPlace);
    this.TrainingHasPlaceService.deleteTrainingHasPlace(TrainingHasPlace).subscribe();
  }

}
