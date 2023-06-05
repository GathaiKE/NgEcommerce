import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../Interfaces/products-interfaces';
import { AddCartSucess, ClearCartSuccess, DecreaseCartSuccess, DeleteItemSuccess, IncreaseCartSuccess } from '../Interfaces/cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) {}

  addToCart(product_id:string):Observable<AddCartSucess>{
    return this.http.post<AddCartSucess>('http://localhost:5000/cart/add',product_id)
  }

  readCart():Observable<Cart[]>{
    return this.http.get<Cart[]>('http://localhost:5000/cart/getUserCart')
  }

  increaseCartCount(product_id:string):Observable<IncreaseCartSuccess>{
      return this.http.put<IncreaseCartSuccess>('http://localhost:5000/cart/increase',product_id)
  }

  decreaseCartCount(product_id:string):Observable<DecreaseCartSuccess>{
      return this.http.put<DecreaseCartSuccess>('http://localhost:5000/cart/reduce',product_id)
  }

  removeFromCart():Observable<DeleteItemSuccess>{
    return this.http.delete<DeleteItemSuccess>('http://localhost:5000/cart/remove')
  }

  clearCart():Observable<ClearCartSuccess>{
    return this.http.delete<ClearCartSuccess>('http://localhost:5000/cart/clear')
  }
}
