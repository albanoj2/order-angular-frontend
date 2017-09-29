import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { OrdersComponent } from './component/orders.component';
import { EditOrderComponent } from './component/edit-order.component';
 
const routes: Routes = [
	{ path: '', redirectTo: '/orders', pathMatch: 'full' },
	{ path: 'orders',  component: OrdersComponent },
	{ path: 'orders/:id/edit', component: EditOrderComponent }
];
 
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}