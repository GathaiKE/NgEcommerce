import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user';
import { Admin, adminLogInSuccess } from '../Interfaces/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  adminLogin(admin:Admin):Observable<adminLogInSuccess>{
    return this.http.post<adminLogInSuccess>('http://localhost:5000/users/admLogin',admin)
  }

  }
