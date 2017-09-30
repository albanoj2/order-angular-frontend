import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Order } from '../order.resource';
import { OrderService } from '../service/order.service';

@Component({
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css'],
    selector: 'orders'
})
export class OrdersComponent implements OnInit {
  
    orders: Order[] = [];
	searchDescription: string;

    constructor(private orderService: OrderService, private router: Router) { }

    ngOnInit() {
        this.retrieveOrders();
    }

	private retrieveOrders() {
		this.orderService.getOrders()
			.then(orders => this.orders = orders);
	}

	public deleteOrder(order: Order) {
		this.orderService.deleteOrder(order.id)
			.then(() => this.retrieveOrders());
	}

	public editOrder(order: Order) {
		this.router.navigate(['/orders', order.id, 'edit']);
	}

	public createOrder() {
		this.router.navigate(['/orders/create']);
	}
}