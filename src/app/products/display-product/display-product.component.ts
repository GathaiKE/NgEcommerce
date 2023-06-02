import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/Services/products.service';
import { Product } from 'src/app/Interfaces/products-interfaces';
import { ShortPipe } from 'src/app/Pipes/short.pipe';

@Component({
  selector: 'app-display-product',
  standalone: true,
  imports: [CommonModule,ShortPipe],
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit{

  constructor(private productsService:ProductsService){}
  products=this.productsService.getAllProducts()

    ngOnInit(): void {
      this.productsService.getAllProducts().subscribe(
        res=>{
          console.log(res);
        }
      )
  }
  deleteProduct(id:number){
    //   this.productsService.deleteProduct(id)
    // this.products=this.productsService.products
    }

  updateProduct(){

  }
}
