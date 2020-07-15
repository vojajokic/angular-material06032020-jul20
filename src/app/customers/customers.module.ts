import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon';
import { CustomerCardComponent } from './customer-card/customer-card.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    //Material
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [CustomerListComponent, CustomerCardComponent ]
})
export class CustomersModule { }