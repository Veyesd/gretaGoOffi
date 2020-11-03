import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { TripComponent } from '../../components/trip/trip.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule, 
 
  ],
  declarations: [HomePage, NavComponent, TripComponent]
})
export class HomePageModule {}
