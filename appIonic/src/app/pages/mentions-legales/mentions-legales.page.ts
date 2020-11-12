import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mentions-legales',
  templateUrl: './mentions-legales.page.html',
  styleUrls: ['./mentions-legales.page.scss'],
})
export class MentionsLegalesPage implements OnInit {
  @Output() public header = true;
  constructor() { }

  ngOnInit() {
    
  }

}
