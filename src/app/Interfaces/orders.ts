export interface Order {
    order_id:number
    order_status: string
    user_id:string
}

export interface CreateOrderSuccess{
    message:string
}

export interface CancelOrderSuccess{
    message:string
}


export interface CompleteOrderSuccess{
    message:string
}