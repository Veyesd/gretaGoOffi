import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  @Output() public header = true;
  constructor() { }

  ngOnInit() {
    
  }


}
