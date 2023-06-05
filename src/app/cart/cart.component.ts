import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'redux';
import { Cart } from '../Interfaces/products-interfaces';
import { Store } from '@ngrx/store';
import * as CartActions from '../ngrx/Actions/CartActions'
import { getCart } from '../ngrx/Reducers/CartReducers';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{

cart!:Observable<Cart[]>

constructor(private store:Store){}

ngOnInit(): void {
  this.store.select(getCart)
  this.store.dispatch(CartActions.getCart())
}


}
