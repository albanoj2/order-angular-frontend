import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { Order } from '../order.resource';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SaveOrderComponent } from './save-order.component';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './save-order.component.html',
    styleUrls: ['./save-order.component.css'],
    selector: 'save-order'
})
export class EditOrderComponent extends SaveOrderComponent {

	protected order: Order;

	public constructor(
		private orderService: OrderService, 
		private route: ActivatedRoute,
 		router: Router) {
			super(router);
	}

	ngOnInit() {
        this.route.paramMap
    		.switchMap((params: ParamMap) => this.orderService.getOrder(+params.get('id')))
    		.subscribe(order => this.order = order);
    }

	protected onSave() {
		this.orderService.updateOrder(this.order).then(order => this.navigateToOrders());
	}

	protected getTitle(): string {
		return "Edit Order";
	}

	protected getSaveButtonText() {
		return 'Update';
	}
}