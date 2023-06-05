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

    categories=this.productsService.categories
  show=false

    ngOnInit(): void {
    this.productsService.getAllProducts
}

toggle(){
  this.show=!this.show
}

isLoggedIn(){
  this.authenticatorService.isLoggedin
}
}
