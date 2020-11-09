import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.page.html',
  styleUrls: ['./messaging.page.scss'],
})
export class MessagingPage implements OnInit {
  @Output() public header = true;
  constructor() { }

  ngOnInit() {
  }

}
