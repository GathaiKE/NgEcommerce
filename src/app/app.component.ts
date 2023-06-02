import { Component } from '@angular/core';
import { ProductsService } from './Services/products.service';
import { Product } from './Interfaces/products-interfaces';
import { AuthenticatorService } from './Services/authenticator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Admin';

  constructor(private productsService:ProductsService, public authenticatorService:AuthenticatorService){}
    // products:Product[]=this.productsService.products
    categories=this.productsService.categories


    ngOnInit(): void {
    this.productsService.getAllProducts
}
}
