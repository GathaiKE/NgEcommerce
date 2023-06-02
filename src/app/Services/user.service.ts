import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogInSuccess, LogInUser, RegisterSuccess, User } from '../Interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addUser(newUser:User):Observable<RegisterSuccess>{
    return this.http.post<RegisterSuccess>('http://localhost:5000/users/register',newUser)
  }

  logInUser(user:LogInUser):Observable<LogInSuccess>{
    return this.http.post<LogInSuccess>('http://localhost:5000/users/login',user)
  }
}
