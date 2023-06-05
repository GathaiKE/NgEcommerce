import { createAction, props } from "@ngrx/store"
import { Cart } from "src/app/Interfaces/products-interfaces"



export const getCart=createAction('[Cart]-GetCart')
export const getCartSuccess=createAction('[Cart]-GetCartSuccess',props<{userCart:Cart[]}>())
export const getCartFailure=createAction('[Cart]-GetCartFailure',props<{errorMessage:string}>())

export const addToCart = createAction('[Cart]-AddToCart',props<{product_id:string}>())
export const addToCartSuccess=createAction('[Cart]-AddToCartSuccess',props<{successMsg:string}>())
export const addToCartFailure=createAction('[Cart]-AddToCartFailure',props<{errorMsg:string}>())

