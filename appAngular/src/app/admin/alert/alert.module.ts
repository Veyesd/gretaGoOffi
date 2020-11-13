import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { AlertRoutingModule } from './alert-routing.module';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule, NbRadioModule,NbSelectModule, NbToggleModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditComponent, IndexComponent, AddComponent],
  imports: [
    CommonModule,
    AlertRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbDatepickerModule,
    FormsModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbRadioModule,
    NbToggleModule,
    NbUserModule,
  ]
})
export class AlertModule { }
