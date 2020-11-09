import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ErrorComponent } from './partials/error/error.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  },
  {
    path: 'user', loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule)
  },
  {
    path: 'auth', loadChildren: () => import('./gate/gate.module')
      .then(m => m.GateModule)
  },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
