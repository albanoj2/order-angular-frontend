import { Injectable } from '@angular/core';
import { Order } from '../order.resource';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrderService {
  
    private ordersUrl = 'http://localhost:8080/order';
    private headers = new Headers({'Access-Control-Allow-Origin': '*', 'Accepts': 'application/json', 'Content-Type': 'application/json'});
  
    public constructor(private http: Http) {}
   
    public getOrders(): Promise<Order[]> {
        return this.http.get(this.ordersUrl, {headers: this.headers})
             .toPromise()
			 .then(response => response.json().map(jsonOrder => Order.fromJson(jsonOrder)))
             .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('Could not complete requested service operation', error);
        return Promise.reject(error.message || error);
    }

	public deleteOrder(order: Order): Promise<void> {
		return this.http.delete(order.links.delete.href, {headers: this.headers})
             .toPromise()
			 .then(response => null)
             .catch(this.handleError);
	}

	public getOrder(id: number): Promise<Order> {
        return this.http.get(`${this.ordersUrl}/${id}`, {headers: this.headers})
             .toPromise()
			 .then(this.convertResponseToOrderResource)
             .catch(this.handleError);
    }

    private convertResponseToOrderResource(response: any): Order {
        return Order.fromJson(response.json());
    }

	public updateOrder(order: Order): Promise<Order> {
		return this.http.put(order.links.update.href, JSON.stringify(order.serialize()), {headers: this.headers})
             .toPromise()
			 .then(this.convertResponseToOrderResource)
             .catch(this.handleError);
	}

    public createOrder(order: Order): Promise<Order> {
		return this.http.post(`${this.ordersUrl}`, JSON.stringify(order.serialize()), {headers: this.headers})
             .toPromise()
			 .then(this.convertResponseToOrderResource)
             .catch(this.handleError);
	}
}