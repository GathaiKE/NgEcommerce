import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/Services/products.service';
import { ShortPipe } from 'src/app/Pipes/short.pipe';
import { Appstate } from 'src/State/AppState';
import * as ProductActions from '../../ngrx/Actions/ProductActions'
import { Store } from '@ngrx/store';
import { Product } from 'src/app/Interfaces/products-interfaces';
import { Observable } from 'rxjs';
import { getProducts } from 'src/app/ngrx/Reducers/ProductReducers';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-display-product',
  standalone: true,
  imports: [CommonModule,ShortPipe],
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit{
  
  products!:Observable<Product[]>

  constructor(private router:Router,private store:Store<Appstate>){}

    ngOnInit(): void {
      this.store.dispatch(ProductActions.getProducts())
      this.products=this.store.select(getProducts)
    }

    updateProduct(Product_id:string){
      
    }
  
  deleteProduct(product_id:string){
    this.store.dispatch(ProductActions.deleteProduct({product_id}))
    this.store.dispatch(ProductActions.getProducts())
    }
}
