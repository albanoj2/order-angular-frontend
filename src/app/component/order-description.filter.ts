import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../order.resource';

@Pipe({
    name: 'orderDescriptionFilter',
    pure: false
})
export class OrderDescriptionPipe implements PipeTransform {
    
	transform(orders: Order[], description: string): any {

		if (description === "" || description === undefined) {
			return orders;
		}
		else {
        	return orders.filter(order => order.description.toLowerCase().startsWith(description.toLowerCase()));
		}
    }
}