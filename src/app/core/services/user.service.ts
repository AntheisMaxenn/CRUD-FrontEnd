import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserInfo } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Get the currentUser passed from the Parent Component.
  
  thisUser: User;
  thisUserInfo: UserInfo;

  constructor(private auth: AuthService, private http: HttpClient) {
    this.thisUser = this.auth.currentUser.value;
  }

  userInfo(): Observable<UserInfo>{
    return this.http.get<UserInfo>("https://simple-node-sql-auth.ts.r.appspot.com/profile/"+ this.thisUser.id);
  }





}
