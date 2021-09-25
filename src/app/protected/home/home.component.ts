import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/core/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  thisUser: User;
  returnUrl: string;
  
  ngOnInit(): void {
    this.thisUser = this.auth.currentUser.value
  }

  logout(){
    this.auth.logout();
    console.log("logout triggered");
    this.router.navigate(['/'],  { queryParams: { returnUrl: "/home" }});
  }

}
