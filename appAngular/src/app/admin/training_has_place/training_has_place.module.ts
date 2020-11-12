import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { TrainingHasPlaceRoutingModule } from './training_has_place-routing.module';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbRadioModule,NbInputModule, NbSelectModule, NbTreeGridModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditComponent, IndexComponent, AddComponent],
  imports: [
    CommonModule,
    TrainingHasPlaceRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbDatepickerModule,
    FormsModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule,
    NbRadioModule,
  ]
})
export class TrainingHasPlaceModule { }
