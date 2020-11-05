import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate-message',
  templateUrl: './validate-message.page.html',
  styleUrls: ['./validate-message.page.scss'],
})
export class ValidateMessagePage implements OnInit {
  message: string;
  constructor() { }

  ngOnInit() {
    this.message = "Votre trajet à bien été supprimer. Un message sera envoyé aux passagers inscrits"
  }

}
