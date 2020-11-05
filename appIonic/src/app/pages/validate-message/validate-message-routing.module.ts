import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateMessagePage } from './validate-message.page';

const routes: Routes = [
  {
    path: '',
    component: ValidateMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidateMessagePageRoutingModule {}
