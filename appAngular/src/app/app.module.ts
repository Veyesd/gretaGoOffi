import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ErrorComponent } from './partials/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '@nebular/auth';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://localhost:8000',
              login: {
                // ...
                endpoint: '/auth/login',
                method : 'post',
                redirect: {
                  success: '/admin',
                  failure: null, // stay on the same page
                },
              },
              logout: {
                // ...
                endpoint: '',
                method : 'delete',
                redirect: {
                  success: '/auth/login',
                  failure: null, // stay on the same page
                },
              },
              register: {
                // ...
                endpoint: '/register',
                method : 'post',
                redirect: {
                  success: '/users',
                  failure: null, // stay on the same page
                },
              },
              token: {
                class: NbAuthJWTToken,
                key: 'access_token'
              }
        }),
      ],
      forms: {},
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
