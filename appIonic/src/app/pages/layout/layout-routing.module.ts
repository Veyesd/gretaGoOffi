import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPage } from './layout.page';
import { HomePageModule } from '../home/home.module';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '', component: LayoutPage, children: [
      {path: '', component: HomePage},
      {
        path: 'account',
        loadChildren: () =>
          import('../account/account.module').then((m) => m.AccountPageModule),
      },
      {
        path: 'trip',
        loadChildren: () =>
          import('../trip/trip.module').then((m) => m.TripPageModule),
      },
      {
        path: 'create-trip',
        loadChildren: () =>
          import('../create-trip/create-trip.module').then(
            (m) => m.CreateTripPageModule
          ),
      },
      {
        path: 'messaging',
        loadChildren: () =>
          import('../messaging/messaging.module').then(
            (m) => m.MessagingPageModule
          ),
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule {}
