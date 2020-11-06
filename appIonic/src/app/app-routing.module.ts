import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account/account.module').then((m) => m.AccountPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'trip',
    loadChildren: () =>
      import('./pages/trip/trip.module').then((m) => m.TripPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'create-trip',
    loadChildren: () =>
      import('./pages/create-trip/create-trip.module').then(
        (m) => m.CreateTripPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'messaging',
    loadChildren: () =>
      import('./pages/messaging/messaging.module').then(
        (m) => m.MessagingPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'password',
    loadChildren: () =>
      import('./password/password.module').then((m) => m.PasswordPageModule),
  },
  {
    path: 'validate-message',
    loadChildren: () =>
      import('./pages/validate-message/validate-message.module').then(
        (m) => m.ValidateMessagePageModule
      ),
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./pages/faq/faq.module').then((m) => m.FaqPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mentions-legales',
    loadChildren: () =>
      import('./pages/mentions-legales/mentions-legales.module').then(
        (m) => m.MentionsLegalesPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
