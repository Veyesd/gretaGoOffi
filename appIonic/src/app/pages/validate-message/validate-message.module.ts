import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidateMessagePageRoutingModule } from './validate-message-routing.module';

import { ValidateMessagePage } from './validate-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidateMessagePageRoutingModule
  ],
  declarations: [ValidateMessagePage]
})
export class ValidateMessagePageModule {}
