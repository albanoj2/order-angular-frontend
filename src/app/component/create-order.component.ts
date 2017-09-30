import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { Order } from '../order.resource';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './save-order.component.html',
    styleUrls: ['./save-order.component.css'],
    selector: 'create-order'
})
export class CreateOrderComponent implements OnInit {

	protected order: Order;

	public constructor(
		private orderService: OrderService, 
		private route: ActivatedRoute,
 		private router: Router) {
	}

	ngOnInit() {
        this.order = new Order();
    }

	protected onSave() {
		this.orderService.createOrder(this.order).then(order => this.navigateToOrders());
	}

	private navigateToOrders() {
		this.router.navigate(['/orders']);
	}

	protected onCancel() {
		this.navigateToOrders();
	}

	protected getSaveButtonText() {
		return 'Create';
	}
}