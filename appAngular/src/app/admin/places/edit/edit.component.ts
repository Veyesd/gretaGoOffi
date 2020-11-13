import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../../services/places.service';
import { Location } from '@angular/common';
import { Place } from 'src/app/interfaces/place';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  Place: Place;
  status: string;

  constructor(
    private route: ActivatedRoute,
    private PlacesService: PlacesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPlace();
  }
  getPlace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.PlacesService.getPlace(id)
    .subscribe(t => this.Place = t['data']);
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.PlacesService.updatePlace(this.Place)
    .subscribe(() => this.goBack());
  }

}
