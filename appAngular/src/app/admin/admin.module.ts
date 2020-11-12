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
  NbDatepickerModule
} from '@nebular/theme';




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
    NbDatepickerModule.forRoot()
  ]
})
export class AdminModule { }
