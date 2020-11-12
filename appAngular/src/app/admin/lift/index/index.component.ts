import { Component, OnInit } from '@angular/core';
import { Lift } from '../../../interfaces/lift';
import { LiftService } from '../../../services/lift.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  datas: Lift[];
  constructor( private LiftService : LiftService) { }

  ngOnInit(): void {

    this.getLifts();
  }
  getLifts(): void {
    this.LiftService.getLifts()
    .subscribe(datas => this.datas = datas["data"]
    
    );
  }

  delete(Lift: Lift): void {
    this.datas = this.datas.filter(p => p !== Lift);
    this.LiftService.deleteLift(Lift).subscribe();
  }

}
