import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // DI auth service to access the currentUser<User> object
  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify request and set Header 'authorization' to inc the (currentUser.token ?  )

    let user = this.auth.currentUser.value;

    // THIS WORKS V
    console.log("User: " + user ? user : "-" + " token: " + user.token ? user.token : "-")

    if(user && user.token){
    // if(true){
      console.log(user.token)
      request = request.clone({
        setHeaders: { 
            Authorization: `Bearer ${user.token}`
        }
    });
      
    }


    console.log("No interceptor working")
    return next.handle(request);
  }
}
