import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Order } from "src/app/Interfaces/orders";
import * as OrderActions from '../Actions/OrderActions'

export interface OrderInterface {
    orders:Order[]
    errorMsg:string
}
const initialState:OrderInterface={orders:[],errorMsg:''}

export const ordersReducer = createReducer(
    initialState,


    on(OrderActions.getOrderSuccess, (state,action):OrderInterface=>{
        return {
            ...state,
            orders:action.Orders,
            errorMsg:''
        }
    }),

    on(OrderActions.getOrderFailure, (state,action) : OrderInterface=>{
        return {
            ...state,
            orders:[],
            errorMsg:action.errorMsg
        }
    })
)

const getOrdersState = createFeatureSelector<OrderInterface>('order')
export const getOrder = createSelector(getOrdersState, (state)=>state.orders)
export const getOrderError = createSelector(getOrdersState, (state)=>state.errorMsg)