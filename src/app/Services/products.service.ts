import { Injectable } from '@angular/core';
import { AddProduct, AddProductSuccess, DeleteProductSuccess, Product, UpdateProductSuccess } from '../Interfaces/products-interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http:HttpClient) { }
    categories=['All','Drinks','Vegetables','Fruits','Meat','Cereals','Flour']

    addProduct(newProduct:AddProduct):Observable<AddProductSuccess>{
        return this.http.post<AddProductSuccess>('http://localhost:5000/products/add',newProduct)
    }

    getAllProducts():Observable<Product[]>{
        return this.http.get<Product[]>('http://localhost:5000/products/getAll')
    }

    getsingleProduct(product_id:string){
        return this.http.get<Product>(`http://localhost:5000/products/getProduct/${product_id}`)
    }
    
    updateProduct(product_id:string,updatedProduct:AddProduct):Observable<UpdateProductSuccess>{
        return this.http.put<UpdateProductSuccess>(`http://localhost:5000/products/update/${product_id}`,updatedProduct)

    }

    deleteProduct(product_id:string):Observable<DeleteProductSuccess>{
        return this.http.delete<DeleteProductSuccess>(`http://localhost:5000/products/delete/${product_id}`)
    }
}
