import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CartService } from 'src/app/Services/cart.service';
import * as CartActions from '../Actions/CartActions'
import { catchError, map, mergeMap, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartEffectsService {

  constructor(private CartService:CartService, private action$:Actions){}

  getCart=createEffect(()=>{
    return this.action$.pipe(
      ofType(CartActions.getCart),
      mergeMap(action=>{
        return this.CartService.readCart().pipe(
          map(cart=>{
            return CartActions.getCartSuccess({userCart:cart})
          }),
          catchError(err=>of(CartActions.getCartFailure({errorMessage:err})))
        )
      })
    )
  }
  )

  addToCart=createEffect(()=>{
    return this.action$.pipe(
      ofType(CartActions.addToCart),
      mergeMap(action=>{
        return this.CartService.addToCart(action.product_id).pipe(
          map(successMsg=>{
            return CartActions.addToCartSuccess({successMsg:successMsg.message})
          }),
          catchError(err=>of(CartActions.addToCartFailure({errorMsg:err})))
        )
      })
    )
  })

}
