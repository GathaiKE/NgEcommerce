import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../Services/products.service';
import { Product } from '../Interfaces/products-interfaces';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {ActivatedRoute, Params} from '@angular/router'
import * as ProductActions from '../ngrx/Actions/ProductActions'
import { getCategory } from '../ngrx/Reducers/ProductReducers';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private productsService:ProductsService,private store:Store, private route:ActivatedRoute){}

    products!:Observable<Product[]>
    categories=this.productsService.categories
    ngOnInit(): void {
    this.route.params.subscribe((c:Params)=>{
      this.store.dispatch(ProductActions.getProducts())
      this.store.dispatch(ProductActions.getSingleCategory({category:c['category']}))
      this.products=this.store.select(getCategory)
    })
    }

  viewDetails(){
    
  }
}
