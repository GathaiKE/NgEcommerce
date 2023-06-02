import { Injectable } from '@angular/core';
import { LogInSuccess } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
role!: string | null
token!:string | null


  constructor( ) {
    
  }

  logout(){
    localStorage.clear()
  }

  logIn(response:LogInSuccess){
    localStorage.setItem('role', response.role)    
    localStorage.setItem('token',response.token)
    localStorage.setItem('username',response.username)
  }

  isLoggedin(){
    let role=localStorage.getItem('role')
    this.role?role:null

    let token=localStorage.getItem('token')
    this.token?token:null

    return this.token?true:false
  }

  readUsername(){
    let username=localStorage.getItem('username')
    return username?username:""
  }

}
