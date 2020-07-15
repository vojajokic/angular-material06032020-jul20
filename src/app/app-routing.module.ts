import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers', 
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: 'messages', 
    loadChildren: './messages/messages.module#MessagesModule'
  },
  {
    path: 'orders', 
    loadChildren: './orders/orders.module#OrdersModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}