import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { Order } from '../order.resource';
import { Router } from '@angular/router';
import { SaveOrderComponent } from './save-order.component';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './save-order.component.html',
    styleUrls: ['./save-order.component.css'],
    selector: 'create-order'
})
export class CreateOrderComponent extends SaveOrderComponent {

    public constructor(
        private orderService: OrderService,
        router: Router) {
            super(router);
    }

    protected loadOrder(): Promise<Order> {
        const order = new Order();
        order.cost = 0.0;
        return Promise.resolve(order);
    }

    protected getTitle(): string {
        return "Create Order";
    }

    protected onSave() {
        this.orderService.createOrder(this.order).then(order => this.navigateToOrders());
    }

    protected getSaveButtonText(): string {
        return 'Create';
    }
}