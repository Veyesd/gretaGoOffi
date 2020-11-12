import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Trip } from 'src/app/interfaces/trip';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  trips: Trip[];
  id: string;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private tripService: TripService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  getTrips(): void {
    this.tripService
      .getTrips()
      .subscribe((trip) => (this.trips = trip['data']));
    console.log(this.trips);
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      // tslint:disable-next-line: quotemark
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }
}
