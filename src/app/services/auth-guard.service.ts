import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);
    console.log(JSON.parse(localStorage.getItem('wallet_user')))
    let authInfo = {
      authenticated: JSON.parse(localStorage.getItem('wallet_user')),
    };
    if (authInfo.authenticated == null) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
