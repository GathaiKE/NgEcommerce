import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from 'src/app/Services/products.service';
import * as ProductActions from '../Actions/ProductActions'
import { catchError, map, mergeMap, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ProductEffectsService {

  constructor(private action$:Actions, private productsService:ProductsService) { }

  getProducts=createEffect(()=>{
    return this.action$.pipe(
      ofType(ProductActions.getProducts),
      mergeMap(action=>{
        return this.productsService.getAllProducts().pipe(
          map(products=>{
            return ProductActions.getProductsSuccess({products})
          }),
        catchError(err=>of(ProductActions.getProductsFailure({errorMessage:err}))) 
        )
      })
    )
  })

  addProduct=createEffect(()=>{
    return this.action$.pipe(
      ofType(ProductActions.addProduct),
      mergeMap(action=>{
        return this.productsService.addProduct(action.newProduct).pipe(
          map(message=>{
            return ProductActions.addProductSuccess({message:message.message})
          }),
          catchError(err=>of(ProductActions.addProductFailure({message:err})))
        )
      })
    )
  })


    updateProduct=createEffect(()=>{
      return this.action$.pipe(
        ofType(ProductActions.updateProduct),
        mergeMap(action=>{
          return this.productsService.updateProduct(action.product_id, action.updatedProduct).pipe(
            map(res=> ProductActions.updateProductSuccess({message:res.message})),
            catchError(err=>of(ProductActions.updateProductFailure({message:err})))
          )
        })
      )
    })

    deleteProductFailure=createEffect(()=>{
      return this.action$.pipe(
        ofType(ProductActions.deleteProduct),
        mergeMap(action=>{
          return this.productsService.deleteProduct(action.product_id).pipe(
            map(res=>ProductActions.deleteProductSuccess({message:res.message})),
            catchError(err=>of(ProductActions.deleteProductFailure({message:err})))
          )
        })
      )
    })
}
