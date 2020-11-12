import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: DashboardComponent},
      {
        path: 'formations', loadChildren: () => import('./formations/formations.module')
          .then(m => m.FormationsModule)
      },
      {
        path: 'users', loadChildren: () => import('./users/users.module')
          .then(m => m.UsersModule)
      },
      {
        path: 'places', loadChildren: () => import('./places/places.module')
          .then(m => m.PlacesModule)
      },
      {
        path: 'bugs', loadChildren: () => import('./bugs/bugs.module')
          .then(m => m.BugsModule)
      },
      {
        path: 'adedit', loadChildren:() => import('./adedit/adedit.module')
        .then(m => m.AdeditModule)
      },
      {
        path: 'alert', loadChildren:() => import('./alert/alert.module')
        .then(m => m.AlertModule)
      },
      {
        path: 'lift', loadChildren:() => import('./lift/lift.module')
        .then(m => m.LiftModule)
      },
      {
        path: 'training_has_place', loadChildren:() => import('./training_has_place/training_has_place.module')
        .then(m => m.TrainingHasPlaceModule)
      },
      {
        path: 'user_has_place', loadChildren:() => import('./user_has_place/user_has_place.module')
        .then(m => m.UserHasPlaceModule)
      },
      {
        path: 'user_has_lift', loadChildren:() => import('./user_has_lift/user_has_lift.module')
        .then(m => m.UserHasLiftModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}