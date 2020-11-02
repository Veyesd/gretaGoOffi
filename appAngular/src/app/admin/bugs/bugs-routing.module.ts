import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BugsReportComponent } from './bugs-report/bugs-report.component';

const routes: Routes = [
  {path: '', component: BugsReportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugsRoutingModule {}