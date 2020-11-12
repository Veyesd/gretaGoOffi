import { Component, OnInit } from '@angular/core';
import { UserHasPlace } from '../../../interfaces/user_has_place';
import { UserHasPlaceService } from '../../../services/user_has_place.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  datas: UserHasPlace[];
  constructor( private UserHasPlaceService : UserHasPlaceService) { }

  ngOnInit(): void {

    this.getUserHasPlaces();
  }
  getUserHasPlaces(): void {
    this.UserHasPlaceService.getUserHasPlaces()
    .subscribe(datas => this.datas = datas["data"]
    
    );
  }

  delete(UserHasPlace: UserHasPlace): void {
    this.datas = this.datas.filter(p => p !== UserHasPlace);
    this.UserHasPlaceService.deleteUserHasPlace(UserHasPlace).subscribe();
  }

}
