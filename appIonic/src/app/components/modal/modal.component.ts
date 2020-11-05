import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";


@Component({
  // tslint:disable-next-line: component-selector
  selector: "modal-component",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  lat: number;
  longt: number;
  
  constructor(
    private modalCtrl: ModalController,

  ) {}

  ngOnInit() {}

  public closeModal() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
  // setGeolocalisation() {
  //   this.geolocation
  //     .getCurrentPosition()
  //     .then((resp) => {
  //       this.lat = (resp.coords.latitude);
  //       this.longt =(resp.coords.longitude);
  //     })
  //     .catch((error) => {
  //       console.log("Error getting location", error);
  //     });

  //   const watch = this.geolocation.watchPosition();
  //   watch.subscribe((data) => {
  //     // data can be a set of coordinates, or an error (if an error occurred).
  //     // data.coords.latitude
  //     // data.coords.longitude
  //   });
  // }
}
