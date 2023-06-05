import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CancelOrderSuccess, CompleteOrderSuccess, CreateOrderSuccess, Order } from '../Interfaces/orders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) {}

  createOrder(newOrder:Order):Observable<CreateOrderSuccess>{
    return this.http.post<CreateOrderSuccess>('http://localhost:5000/orders/newOrder',newOrder)
  }

  readOrders():Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:5000/orders/allOrders')
  }

  cancelOrder(order_id:string):Observable<CancelOrderSuccess>{
    return this.http.put<CancelOrderSuccess>('http://localhost:5000/orders/cancel',order_id)
  }

  completeOrder(order_id:string):Observable<CompleteOrderSuccess>{
    return this.http.put<CompleteOrderSuccess>('http://localhost:5000/orders/complete',order_id)
  }

}
