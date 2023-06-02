import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DisplayProductComponent } from './products/display-product/display-product.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './products/search/search.component';
import { FooterComponent } from './footer/footer.component';
import { LogInComponent } from './log-in/log-in.component';
import { ShortPipe } from './Pipes/short.pipe';
import { CartComponent } from './cart/cart.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { CategoryComponent } from './category/category.component';
import { DisplaySingleProductComponent } from './products/display-single-product/display-single-product.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    DisplayProductComponent,
    AddProductComponent,
    ReactiveFormsModule,
    SearchComponent,
    LogInComponent,
    HttpClientModule,
    ShortPipe,
    CartComponent,
    UserOrderComponent,
    AdminOrderComponent,
    CategoryComponent,
    DisplaySingleProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
