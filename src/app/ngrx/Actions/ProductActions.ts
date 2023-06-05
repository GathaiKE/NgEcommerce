import { createAction, props } from "@ngrx/store";
import { AddProduct, Product } from "src/app/Interfaces/products-interfaces";



export const getProducts=createAction('[Products]-GetProducts')
export const getProductsSuccess=createAction('[Products]-GetProductsSuccess',props<{products:Product[]}>())
export const getProductsFailure=createAction('[Products]-GetProductsFailure',props<{errorMessage:string}>())

export const addProduct = createAction('[Products]-AddProduct',props<{newProduct:AddProduct}>())
export const addProductSuccess=createAction('[Products]-AddProductSuccess',props<{message:string}>())
export const addProductFailure=createAction('[Products]-AddProductFailure',props<{message:string}>())

export const updateProduct = createAction('[Products]-UpdateProduct',props<{product_id:string,updatedProduct:AddProduct}>())
export const updateProductSuccess=createAction('[Products]-UpdateProductSuccess',props<{message:string}>())
export const updateProductFailure=createAction('[Products]-UpdateProductFailure',props<{message:string}>())

export const deleteProduct = createAction('[Products]-DeleteProdut',props<{product_id:string}>())
export const deleteProductSuccess = createAction('[Products]-deleteProductSuccess',props<{message:string}>())
export const deleteProductFailure = createAction('[Products]-deleteProductFailure',props<{message:string}>())

export const getSingleProduct = createAction('[Products]-GetSingleProdut',props<{product_id:string}>())
export const getSingleCategory = createAction('[Category]-GetSingleCategpry',props<{category:string}>())
