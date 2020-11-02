import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GateRoutingModule } from './gate-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbThemeModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    GateRoutingModule,
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule,
    NbThemeModule.forRoot({ name: 'dark' }),
  ]
})
export class GateModule { }
