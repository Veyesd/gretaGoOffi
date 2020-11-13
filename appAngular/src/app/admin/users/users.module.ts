import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { UsersRoutingModule } from './users-routing.module';
import { NbDatepickerModule, NbSelectModule, NbTreeGridModule, NbCardModule, NbButtonModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
// import { NbDateFnsDateModule } from '@nebular/date-fns/date-fns.module';




@NgModule({
  declarations: [IndexComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbDatepickerModule,
    FormsModule,
    NbSelectModule,
    NbButtonModule,
  //    NbDateFnsDateModule,
  
  ]
})
export class UsersModule { }
