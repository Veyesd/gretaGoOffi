import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.scss'],
})
export class TripPage implements OnInit {
  @Output() public header = true;
  constructor() { }

  ngOnInit() {
  }

}
