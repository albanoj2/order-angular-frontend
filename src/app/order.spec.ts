import { TestBed } from '@angular/core/testing';
import { Order } from './order.resource';

class OrderFactory {
  
    public static createWithPrice(costInCents: number): Order {
        const order = new Order({});
        order.costInCents = costInCents;
        return order;
    }
}

describe('Order', () => {
  
    it('Cost amount is correct', () => {
        const order = OrderFactory.createWithPrice(381);
        expect(order.cost).toEqual(3.81);
    });
  
    it('Zero cost is correct', () => {
        const order = OrderFactory.createWithPrice(0);
        expect(order.cost).toEqual(0.0);
    });
  
    it('Cost string is correct', () => {
        const order = OrderFactory.createWithPrice(381);
        expect(order.costString).toEqual("$3.81");
    });
  
    it('Cost string with only cents is correct', () => {
        const order = OrderFactory.createWithPrice(71);
        expect(order.costString).toEqual("$0.71");
    });
  
    it('Zero cost string is correct', () => {
        const order = OrderFactory.createWithPrice(0);
        expect(order.costString).toEqual("$0.00");
    });
});
