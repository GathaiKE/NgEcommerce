import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../Services/products.service';
import { Product } from '../Interfaces/products-interfaces';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private productsService:ProductsService){}
    products:Product[]=this.productsService.products
    categories=this.productsService.categories
    ngOnInit(): void {
    this.productsService.getAllProducts
}
  viewDetails(){
    
  }
}
