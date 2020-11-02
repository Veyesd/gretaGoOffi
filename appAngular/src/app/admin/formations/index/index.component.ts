import { Component, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Training } from '../../../interfaces/training';
import { TrainingService } from '../../../services/formations.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  trainings: Training[];
  allColumns = [ 'Nom', 'Date de début', 'Date de fin', 'status', ''];
  defaultColumns = [ 'name', 'start_date', 'end_date', 'status', ''];

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.getTrainings();
  }
  getTrainings(): void {
    this.trainingService.getTrainings()
    .subscribe(trainings => this.trainings = trainings["data"]);
  }

  delete(training: Training): void {
    this.trainings = this.trainings.filter(t => t !== training);
    this.trainingService.deleteTraining(training).subscribe();
  }

}

