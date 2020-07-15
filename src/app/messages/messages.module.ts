import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessageListComponent } from './message-list/message-list.component';

//Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule, 
    MessagesRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    //Material
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatIconModule
  ],
  declarations: [MessageListComponent]
})
export class MessagesModule { }