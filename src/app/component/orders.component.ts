import { Component, OnInit } from '@angular/core';
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

    constructor(private orderService: OrderService) { }

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

}