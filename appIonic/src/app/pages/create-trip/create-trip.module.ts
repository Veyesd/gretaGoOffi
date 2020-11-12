import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTripPageRoutingModule } from './create-trip-routing.module';

import { CreateTripPage } from './create-trip.page';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTripPageRoutingModule
  ],
  declarations: [CreateTripPage, HeaderComponent]
})
export class CreateTripPageModule {}
