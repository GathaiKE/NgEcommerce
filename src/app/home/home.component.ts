import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { Product } from '../Interfaces/products-interfaces';
import { SearchComponent } from "../products/search/search.component";
import {ShortPipe} from '../Pipes/short.pipe'
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, SearchComponent,ShortPipe]
})
export class HomeComponent implements OnInit{ 

products!:Observable<Product[]>
  constructor(public productsService:ProductsService){}
    categories=this.productsService.categories

  ngOnInit(): void {
    this.products=this.productsService.getAllProducts()
  }
  
    // getAllProducts(){
    //   // this.productsService.getAllProducts().subscribe(
    //   // ( response)=>{
    //   //   this.products=response
    //   // }
    //   // )
    // }
  
  viewDetails(){
    
  }
}
