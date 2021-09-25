import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // currentUser = new BehaviorSubject<User>({id: "no user", token: ''});
  currentUser: BehaviorSubject<User>;

  
  
  
  constructor(private http: HttpClient) {
    // Get current user from local storage and assign it.
    this.currentUser = new BehaviorSubject<User>(JSON.parse(localStorage.getItem("currentUser")));
  }

 
  // Is this needed V ?
  // loginError: Observable<string>;

  login(username: string, password: string){
    const body = { id: username, password: password };
    console.log("auth.service.login() triggered")

    return this.http.post<User>('https://simple-node-sql-auth.ts.r.appspot.com/login/login',body)
    .pipe(
      tap(user => {
        this.currentUser.next(user);
        console.log(this.currentUser.value)
        localStorage.setItem('currentUser', JSON.stringify(user));
      }),

    );

  };

  logout(){
    console.log(this.currentUser.value)
    localStorage.removeItem('currentUser');
    this.currentUser.next(null);
  }

}
