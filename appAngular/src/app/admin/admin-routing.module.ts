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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}