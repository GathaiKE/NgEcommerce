import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Interfaces/products-interfaces';
import { SearchComponent } from "../products/search/search.component";
import {ShortPipe} from '../Pipes/short.pipe'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/State/AppState';
import * as ProductActions from '../ngrx/Actions/ProductActions'
import { getProducts } from '../ngrx/Reducers/ProductReducers';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, SearchComponent,ShortPipe,RouterModule]
})
export class HomeComponent implements OnInit{ 

products!:Observable<Product[]>
  constructor(private store:Store<Appstate>){}

  ngOnInit(): void {
    this.products=this.store.select(getProducts)
    this.store.dispatch(ProductActions.getProducts())
  }
  
}
