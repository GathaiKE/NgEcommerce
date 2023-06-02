import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticatorService } from './authenticator.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CanAccessService implements CanActivate{

  constructor(private AuthenticatorService:AuthenticatorService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.AuthenticatorService.isLoggedin()){
      this.router.navigate([''])
      return true
    }else{
      this.router.navigate(['/logIn'])
      return false
    }
  }
}
