import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/Interfaces/products-interfaces';
import { AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/Services/products.service';
import {ShortPipe} from '../../Pipes/short.pipe'
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as ProductActions from '../../ngrx/Actions/ProductActions'
import { Appstate } from 'src/State/AppState';
import { getProducts, getSingleProd } from 'src/app/ngrx/Reducers/ProductReducers';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,ShortPipe],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
 
  constructor(private store:Store<Appstate>, private route:ActivatedRoute, private productService:ProductsService){}

  products!:Observable<Product[]>
  error!:string | null
  form!:FormGroup
  product_id!:string
  update=false

  ngOnInit(): void {
    this.form=new FormGroup({
      product_name:new FormControl('',Validators.required),
      category: new FormControl('default',Validators.required),
      descriptions: new FormControl ('',Validators.required),
      images:new FormControl ('',Validators.required),
      product_price:new FormControl('',[Validators.required,Validators.min(2)])
  })
  this.products= this.store.select(getProducts)
  }

  updateProduct(product_id:string){
    this.update=true
      this.productService.getsingleProduct(product_id).subscribe(
        res=>{
          this.form.setValue({
            product_name:res.product_name,
            category: res.category,
            descriptions: res.descriptions,
            images: res.images,
            product_price:res.product_price
          })
          this.error=null
        },err=>{
          this.error=err.error.message
        }
      )
  }

  onSubmit(){
      this.store.dispatch(ProductActions.addProduct(this.form.value))
    }


  deleteProduct(product_id:string){
    this.store.dispatch(ProductActions.deleteProduct({product_id}))
  }
}
