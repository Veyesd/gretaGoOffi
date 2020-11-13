import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiftService } from '../../../services/lift.service';
import { Location } from '@angular/common';
import { Lift } from 'src/app/interfaces/lift';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  Lift: Lift;
  status: string;

  constructor(
    private route: ActivatedRoute,
    private LiftService: LiftService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLift();
  }
  getLift(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.LiftService.getLift(id)
    .subscribe(t => this.Lift = t['data']);
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.LiftService.updateLift(this.Lift)
    .subscribe(() => this.goBack());
  }

}
