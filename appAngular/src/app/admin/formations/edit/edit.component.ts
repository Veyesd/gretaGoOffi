import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingService } from '../../../services/training.service';
import { Location } from '@angular/common';
import { Training } from 'src/app/interfaces/training';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  training: Training;
  status: string;

  constructor(
    private route: ActivatedRoute,
    private trainingService: TrainingService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTraining();
  }
  getTraining(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.trainingService.getTraining(id)
    .subscribe(t => this.training = t['data']);
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.trainingService.updateTraining(this.training)
    .subscribe(() => this.goBack());
  }

}
