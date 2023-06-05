import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "src/app/Interfaces/products-interfaces";
import * as ProductActions from '../Actions/ProductActions'

export interface ProductInterface{
    products:Product[]
    errorMsg:string
    addProductSuccess: string
    addProductFailure: string
    updateProductSuccess: string
    updateProductFailure: string
    deleteProductSuccess:string
    deleteProductFailure:string
    product_id:string
    category:string
}

const initialState:ProductInterface = {
    products:[],
    errorMsg:'',
    addProductSuccess:'',
    addProductFailure:'',
    updateProductSuccess:'',
    updateProductFailure:'',
    deleteProductSuccess:'',
    deleteProductFailure:'',
    product_id:'',
    category:''
}

export const productReducer=createReducer(
    initialState,

    on(ProductActions.getProductsSuccess,(state,action):ProductInterface=>{
        return {
            ...state,
            errorMsg:'',
            products:action.products
        }
    }),

    on(ProductActions.getProductsFailure,(state,action):ProductInterface=>{
        return {
            ...state,
            errorMsg:action.errorMessage,
            products:[]
        }
    }),

    on(ProductActions.getSingleProduct, (state,action)=>{
        return {
            ...state,
            product_id:action.product_id
        }
    }),

    on(ProductActions.getSingleCategory, (state,action)=>{
        return {
            ...state,
            category:action.category
        }
    }),

    on(ProductActions.addProductSuccess, (state,action):ProductInterface=>{
        return {
            ...state,
            addProductSuccess:action.message,
            addProductFailure:''
        }
    }),

    on(ProductActions.addProductFailure, (state,action):ProductInterface=>{
        return {
            ...state,
            addProductSuccess:'',
            addProductFailure:action.message
        }
    }),


    on(ProductActions.updateProductSuccess, (state,action):ProductInterface=>{
        return {
            ...state,
            updateProductSuccess:action.message,
            updateProductFailure:''
        }
    }),

    on(ProductActions.updateProductFailure, (state,action):ProductInterface=>{
        return {
            ...state,
            updateProductSuccess:'',
            updateProductFailure:action.message
        }
    }),

    on(ProductActions.deleteProductSuccess, (state,action):ProductInterface=>{
        return {
            ...state,
            deleteProductSuccess:action.message,
            deleteProductFailure:''
        }
    }),

    on(ProductActions.deleteProductFailure, (state,action):ProductInterface=>{
        return {
            ...state,
            deleteProductSuccess:'',
            deleteProductFailure:action.message
        }
    })
    )

const getProductState=createFeatureSelector<ProductInterface>('product')
export const getProducts=createSelector(getProductState,(state)=>state.products)
export const getProductError=createSelector(getProductState,(state)=>state.errorMsg)
export const getProductId=createSelector(getProductState,(state)=>state.product_id)
export const getProductCategory=createSelector(getProductState,(state)=>state.category)
export const getSingleProd = createSelector(
    getProducts,
    getProductId,
    (products,product_id)=>{
        console.log(product_id, products);
        
        return products.find(prod=>prod.product_id===product_id) as Product;
    }
)

export const getCategory = createSelector(
    getProducts,
    getProductCategory,
    (products,category)=>{
        console.log(category, products);
        
        return products.find(prod=>prod.category===category) as Product;
    }
)