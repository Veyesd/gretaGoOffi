import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { UserHasPlaceRoutingModule } from './user_has_place-routing.module';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule, NbSelectModule, NbTreeGridModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditComponent, IndexComponent, AddComponent],
  imports: [
    CommonModule,
    UserHasPlaceRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbDatepickerModule,
    FormsModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule,
  ]
})
export class UserHasPlaceModule { }
