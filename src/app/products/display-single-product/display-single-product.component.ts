import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/State/AppState';
import { getProducts, getSingleProd } from 'src/app/ngrx/Reducers/ProductReducers';
import { Product } from 'src/app/Interfaces/products-interfaces';
import { Observable } from 'rxjs';
import { getSingleProduct } from 'src/app/ngrx/Actions/ProductActions';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import * as ProductActions from '../../ngrx/Actions/ProductActions'
import { ShortPipe } from 'src/app/Pipes/short.pipe';
import { AdminService } from 'src/app/Services/admin.service';
import {addToCart} from '../../ngrx/Actions/CartActions'


@Component({
  selector: 'app-display-single-product',
  standalone: true,
  imports: [CommonModule,ShortPipe,RouterModule],
  templateUrl: './display-single-product.component.html',
  styleUrls: ['./display-single-product.component.css']
})
export class DisplaySingleProductComponent implements OnInit{
product!:Observable<Product>
    constructor(private store:Store<Appstate>,private router:Router, private route:ActivatedRoute, private adminAuth:AdminService){}


    ngOnInit(): void {
      this.route.params.subscribe((p:Params)=>{
        this.store.dispatch(ProductActions.getProducts())
        this.store.dispatch(ProductActions.getSingleProduct({product_id:p['product_id']}))
        this.product=this.store.select(getSingleProd)
        console.log(this.product);
        this.product.subscribe(data => console.log(data)
        )
        })
      }

    addToCart(){
      this.route.params.subscribe((p:Params)=>{
        this.store.dispatch(addToCart({product_id:p['product_id']}))
      })
    }
}