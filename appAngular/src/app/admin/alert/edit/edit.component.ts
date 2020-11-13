import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
import { Location } from '@angular/common';
import { Alert } from 'src/app/interfaces/alert';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  Alert: Alert;
  status: string;

  constructor(
    private route: ActivatedRoute,
    private AlertService: AlertService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getAlert();
  }
  getAlert(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.AlertService.getAlert(id)
    .subscribe(t => this.Alert = t['data']);
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.AlertService.updateAlert(this.Alert)
    .subscribe(() => this.goBack());
  }

}
