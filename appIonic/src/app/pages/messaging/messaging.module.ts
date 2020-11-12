import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagingPageRoutingModule } from './messaging-routing.module';

import { MessagingPage } from './messaging.page';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagingPageRoutingModule
  ],
  declarations: [MessagingPage, HeaderComponent]
})
export class MessagingPageModule {}
