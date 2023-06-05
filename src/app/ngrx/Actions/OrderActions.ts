import { createAction, props } from "@ngrx/store";
import { Order } from "src/app/Interfaces/orders";


export const getOrders= createAction('[Orders]-GetOrders')
export const getOrderSuccess = createAction('[Orders]-GetOrdersSuccess',props<{Orders:Order[]}>())
export const getOrderFailure = createAction('[Orders]-GetOrderFailure',props<{errorMsg:string}>())