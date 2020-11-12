import { Component, OnInit } from '@angular/core';
import { Alert } from '../../../interfaces/alert';
import { AlertService } from '../../../services/alert.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  datas: Alert[];
  constructor( private AlertService : AlertService) { }

  ngOnInit(): void {

    this.getAlerts();
  }
  getAlerts(): void {
    this.AlertService.getAlerts()
    .subscribe(datas => this.datas = datas["data"]
    
    );
  }

  delete(Alert: Alert): void {
    this.datas = this.datas.filter(p => p !== Alert);
    this.AlertService.deleteAlert(Alert).subscribe();
  }

}
