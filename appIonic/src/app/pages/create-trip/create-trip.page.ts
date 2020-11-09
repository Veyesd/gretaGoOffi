import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.page.html',
  styleUrls: ['./create-trip.page.scss'],
})
export class CreateTripPage implements OnInit {
  @Output() public header = true;
  constructor() { }

  ngOnInit() {
  }

}
