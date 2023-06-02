import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadComponent:()=>import('./home/home.component').then(c=>c.HomeComponent)},
  {path:'add',loadComponent:()=>import('./products/add-product/add-product.component').then(c=>c.AddProductComponent)},
  {path:'products', loadComponent:()=>import('./products/display-product/display-product.component').then(c=>c.DisplayProductComponent)},
  {path:'logIn',loadComponent:()=>import('./log-in/log-in.component').then(c=>c.LogInComponent)},
  {path:'register',loadComponent:()=>import('./register/register.component').then(c=>c.RegisterComponent)},
  {path:'product',loadComponent:()=>import('./products/display-single-product/display-single-product.component').then(c=>c.DisplaySingleProductComponent)},
  {path:'cart',loadComponent:()=>import('./cart/cart.component').then(c=>c.CartComponent)},
  {path:'order',loadComponent:()=>import('./user-order/user-order.component').then(c=>c.UserOrderComponent)},
  {path:'all-orders',loadComponent:()=>import('./admin-order/admin-order.component').then(c=>c.AdminOrderComponent)},
  {path:'category',loadComponent:()=>import('./category/category.component').then(c=>c.CategoryComponent)},
  {path:'one',loadComponent:()=>import('./products/display-single-product/display-single-product.component').then(c=>c.DisplaySingleProductComponent)},
  {path:'adminlogin',loadComponent:()=>import('./admin-log-in/admin-log-in.component').then(c=>c.AdminLogInComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
