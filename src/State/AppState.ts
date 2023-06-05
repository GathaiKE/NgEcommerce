import { CartInterface } from "src/app/ngrx/Reducers/CartReducers";
import { OrderInterface } from "src/app/ngrx/Reducers/OrderReducers";
import { ProductInterface } from "src/app/ngrx/Reducers/ProductReducers";
import { UserInterface } from "src/app/ngrx/Reducers/UserReducers";

export interface Appstate{
    product:ProductInterface
    cart:CartInterface
    order:OrderInterface
    users:UserInterface
}