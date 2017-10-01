import { OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Order } from '../order.resource';

export abstract class SaveOrderComponent implements OnInit {

    protected order: Order;

    public constructor(private router: Router) {}

    protected abstract loadOrder(): Promise<Order>;
    protected abstract getTitle(): string;
    protected abstract onSave();
    protected abstract getSaveButtonText(): string;

    ngOnInit() {
        this.loadOrder().then(order => this.order = order);
    }

    public isDescriptionValid(): boolean {
        return this.order !== undefined && 
            this.order.description !== undefined && 
            this.order.description !== "";
    }

    public isCostValid(): boolean {
        return this.order !== undefined &&
            this.order.cost !== undefined &&
            this.order.cost >= 0.0;
    }

    public canSubmit(): boolean {
        return this.isDescriptionValid() && this.isCostValid();
    }

    public onCancel() {
		this.navigateToOrders();
	}

    protected navigateToOrders() {
		this.router.navigate(['/orders']);
	}
}