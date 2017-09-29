import { Injectable } from '@angular/core';
import { Order } from '../order.resource';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrderService {
  
    private ordersUrl = 'http://localhost:8080/order';
    private headers = new Headers({'Access-Control-Allow-Origin': '*', 'Accepts': 'application/json'});
  
    public constructor(private http: Http) {}
   
    public getOrders(): Promise<Order[]> {
        return this.http.get(this.ordersUrl, {headers: this.headers})
             .toPromise()
			 .then(response => response.json().map(jsonOrder => new Order(jsonOrder)))
             .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('Could not complete requested service operation', error);
        return Promise.reject(error.message || error);
    }

	public deleteOrder(id: number): Promise<void> {
		return this.http.delete(`${this.ordersUrl}/${id}`, {headers: this.headers})
             .toPromise()
			 .then(response => null)
             .catch(this.handleError);
	}
}