import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../Services/products.service';
import { Order } from '../Interfaces/orders';
import { Product } from '../Interfaces/products-interfaces';

@Component({
  selector: 'app-admin-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent {
  orders!:Product[]
  constructor(private productsService:ProductsService){
    this.orders = this.productsService.products
  }
      

    ngOnInit(): void {
      this.productsService.getAllProducts
  }
  // deleteProduct(id:number){
  //     this.productsService.deleteProduct(id)
  //   this.orders=this.productsService.products
  //     alert('Confirm!')
    }

    // cancelOrder(){

    // }
// }
