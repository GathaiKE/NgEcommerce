import { Injectable } from '@angular/core';
import { AddProductSuccess, DeleteProductSuccess, Product, UpdateProductSuccess } from '../Interfaces/products-interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
    categories=['All','Drinks','Vegetables','Fruits','Meat','Cereals','Flour']
    products!:Product[]
    addProduct(newProduct:Product):Observable<AddProductSuccess>{
        return this.http.post<AddProductSuccess>('http://localhost:5000/products/add',newProduct)
    }


    getAllProducts():Observable<Product[]>{
        return this.http.get<Product[]>('http://localhost:5000/products/getAll')
    }

    getProduct(id:number){
        return this.http.get<Product[]>(`http://localhost:5000/products/getProduct/${id}`)
    }
    updateProduct(updatedProductt:Product[],id:number):Observable<UpdateProductSuccess>{
        return this.http.put<UpdateProductSuccess>(`http://localhost:5000/products/update/${id}`,updatedProductt)

    }

    deleteProduct(id:number):Observable<DeleteProductSuccess>{
        return this.http.delete<DeleteProductSuccess>(`http://localhost:5000/products/delete/${id}`)
    }
}
