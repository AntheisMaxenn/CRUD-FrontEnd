import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserInfo } from 'src/app/core/models/user';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(private user: UserService) { }
  thisUser: User;
  thisUserInfo: Observable<UserInfo>;
  
  ngOnInit(): void {
    // Get thisUserInfo for user.service, subscribe | use async pipe.
    this.thisUserInfo = this.user.userInfo();
  }




}
