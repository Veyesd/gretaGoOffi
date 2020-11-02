import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugsReportComponent } from './bugs-report/bugs-report.component';
import { BugsRoutingModule } from './bugs-routing.module';



@NgModule({
  declarations: [BugsReportComponent],
  imports: [
    CommonModule,
    BugsRoutingModule
  ]
})
export class BugsModule { }
