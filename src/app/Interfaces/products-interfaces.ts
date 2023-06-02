// export interface Product{
//     product_id:number
//     product_name:string
//     product_description:string
//     category:string
//     product_image:string
//     product_price:number
// }


export interface Product{
    product_id:string
    product_name:string
    descriptions:string
    images: string
    product_price:number
}

export interface AddProductSuccess{
    message:string
}
export interface UpdateProductSuccess{
    message:string
}
export interface DeleteProductSuccess{
    message:string
}

export interface Cart{
    item_id:number
    cart_id:string
    user_id:string
    product_id:string
    product_name:string
    product_count:number
    product_price:number
    total_price:number
}