export interface cart{
    item_id:number
    cart_id:string
    user_id:string
    product_id:string
    product_name:string
    product_count:number
    product_price:number
    total_price:number
}

export interface AddCartSucess{
    message:string
}


export interface IncreaseCartSuccess{
    message:string
}

export interface DecreaseCartSuccess{
    message:string
}

export interface ClearCartSuccess{
    message:string
}

export interface DeleteItemSuccess{
    message:string
}

