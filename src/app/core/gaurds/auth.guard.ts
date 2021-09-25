import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  // init contructor and DI requirements
  constructor(private router: Router, private auth: AuthService){}
  
  
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.auth.currentUser.value;
    if(currentUser){
      console.log("CurrentUser returned TRUE.");
      return true;
    }
    this.router.navigate(['/'],  { queryParams: { returnUrl: state.url }});
    return false;
  }
  
}
