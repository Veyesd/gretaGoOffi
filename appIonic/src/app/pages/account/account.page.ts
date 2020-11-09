import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  @Output() public header = true;
  public form = [
    { title: 'Formation : ', val: 'JS2020', isChecked: true },
    { title: 'Anniversaire : ', val: '02 30 59 65 03', isChecked: false },
    { title: 'Adresse : ', val: 'belee', isChecked: false },
    { title: 'Email : ', val: 'belee@gejg/fr', isChecked: false },
    { title: 'Permis : ', val: '', isChecked: false },
  ];
  showTrip = false;
  constructor() { }

  ngOnInit() {
    this.showTrip = false;

  }
  show(){
    this.showTrip = !this.showTrip;
  }
  getSelected(status: string){
  } 
}
