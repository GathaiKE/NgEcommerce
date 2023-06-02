import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/Interfaces/products-interfaces';
import { AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/Services/products.service';
import {ShortPipe} from '../../Pipes/short.pipe'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,ShortPipe],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  error!:string | null
  constructor(private ProductService:ProductsService, private fb:FormBuilder,private http:HttpClient){}

  products= this.ProductService.getAllProducts()
  form!:FormGroup

  ngOnInit(): void {
    this.form=new FormGroup({
      product_name:new FormControl('',Validators.required),
      category: new FormControl('default',Validators.required),
      product_description: new FormControl ('',Validators.required),
      product_image:new FormControl ('',Validators.required),
      product_price:new FormControl('',[Validators.required,Validators.min(2)])
  })
  }

  onSubmit(){
      this.ProductService.addProduct(this.form.value).subscribe(
        res=>{
          res.message
        }, 
        err=>{
          this.error=err.error.message
        }
      )
  }

  updateProduct(){
    // this.ProductService.updateProduct(this.form.value,id).subscribe(
    //   res=>{
    //     this.error=null
    //   }
    // )
  }

  deleteProduct(product_id:number){
    this.ProductService.deleteProduct(product_id).subscribe(

    )
  }
}
