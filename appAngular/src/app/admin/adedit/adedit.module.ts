import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { AdeditRoutingModule } from './adedit-routing.module';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbFormFieldModule, NbRadioModule,NbInputModule, NbSelectModule, NbTreeGridModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditComponent, IndexComponent, AddComponent],
  imports: [
    CommonModule,
    AdeditRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbDatepickerModule,
    FormsModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbRadioModule,
    NbFormFieldModule,
  ]
})
export class AdeditModule { }
