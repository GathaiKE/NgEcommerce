import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as CartActions from '../Actions/CartActions'
import { Cart } from "src/app/Interfaces/products-interfaces";

export interface CartInterface{
    cartItems:Cart[]
    successMsg:string
    errorMsg:string
}

const initialState:CartInterface={cartItems:[],successMsg:'',errorMsg:''}

export const cartReducer=createReducer(
    initialState,


    on(CartActions.getCartSuccess, (state,action):CartInterface=>{
        return {
            ...state,
            errorMsg:'',
            cartItems:action.userCart
        }
    }),

    on(CartActions.getCartFailure, (state,action):CartInterface=>{
        return {
            ...state,
            errorMsg:action.errorMessage,
            successMsg:''
        }
    }),

    on (CartActions.addToCartSuccess, (state,action):CartInterface=>{
        return {
            ...state,
            successMsg:action.successMsg,
            errorMsg:''
        }
    }),

    on(CartActions.addToCartFailure, (state,action):CartInterface=>{
        return {
            ...state,
            cartItems:[],
            errorMsg:action.errorMsg
        }
    })

)

const getCartState=createFeatureSelector<CartInterface>('cart')
export const getCart=createSelector(getCartState, (state)=>state.cartItems)
export const getCartError=createSelector(getCartState, (state)=>state.errorMsg)


