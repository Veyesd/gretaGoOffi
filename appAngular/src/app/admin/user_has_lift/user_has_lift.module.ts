import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { UserHasLiftRoutingModule } from './user_has_lift-routing.module';
import { NbButtonModule, NbCardModule, NbDatepickerModule,NbRadioModule, NbInputModule, NbSelectModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditComponent, IndexComponent, AddComponent],
  imports: [
    CommonModule,
    UserHasLiftRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbDatepickerModule,
    FormsModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbRadioModule,
    NbUserModule,
  ]
})
export class UserHasLiftModule { }
