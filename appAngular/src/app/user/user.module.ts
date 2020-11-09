import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneyComponent } from './journey/journey.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';

import {
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbThemeModule,
  NbCardModule,
  NbUserModule,
} from '@nebular/theme';

@NgModule({
  declarations: [JourneyComponent, LayoutComponent, ProfileComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    UserRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbUserModule,
    NbThemeModule,
    NbCardModule

  ]
})
export class UserModule { }
