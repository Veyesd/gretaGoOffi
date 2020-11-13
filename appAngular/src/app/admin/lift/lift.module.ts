import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { LiftRoutingModule } from './lift-routing.module';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbRadioModule,NbInputModule, NbSelectModule, NbTreeGridModule, NbToggleModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditComponent, IndexComponent, AddComponent],
  imports: [
    CommonModule,
    LiftRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbDatepickerModule,
    FormsModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule,
    NbRadioModule,
    NbToggleModule,
   
  ]
})
export class LiftModule { }
