import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbThemeModule,
  NbTreeGridModule,
  NbCardModule,
  NbDatepickerModule,
  NbSelectModule
} from '@nebular/theme';
// import { NbDateFnsDateModule } from '@nebular/date-fns/date-fns.module';




@NgModule({
  declarations: [DashboardComponent, LayoutComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    AdminRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbTreeGridModule,
    NbThemeModule,
    NbCardModule,
    // NbDateFnsDateModule,
    NbDatepickerModule.forRoot(),
    NbSelectModule,
  ]
})
export class AdminModule { }
