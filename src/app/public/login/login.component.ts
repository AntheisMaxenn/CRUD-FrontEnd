import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // DI Services.
  constructor( private fb: FormBuilder, private route: ActivatedRoute, private auth: AuthService, private router: Router) {
    
    if(this.auth.currentUser.value){
      console.log("Logged in User found. ");
      console.log(this.auth.currentUser.value);
      this.router.navigate(['/home']);
    }else{
      console.log("No user logged in. ");    }
   }

  form: FormGroup;
  hide = true;
  loading: boolean = false;
  
  returnUrl: string;

  response: Observable<any>;
  loginFailedRes: boolean = false;
  
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'|| '/home'];

    this.form = this.fb.group({

      username: ['', [
        Validators.required,
        // Validators.pattern("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"),
        // Validators.email
      ]],
      password:  ['', [
        Validators.required,
        Validators.minLength(8),
      ]]

    })
    // this.response = this.auth.loginError;
  }


  get username(){
    return this.form.get('value');
  }

  get password(){
    return this.form.get('desc');
  }

  login(){
    this.loading = true
    this.loginFailedRes = false;
    console.log("Send Values triggered")
    this.response = this.auth.login(this.form.get("username").value, this.form.get("password").value);

    this.response.subscribe(
      
      data => {
        console.log("data has a return")
        // this.response = data
        this.router.navigate([this.returnUrl]);
        // this.router.navigate(['/home']);
    },
    error => {
      this.loading = false;
      this.response = error.error.error ? error.error.error : '';
      this.loginFailedRes = true;
      console.log("From the error")

    });
  }

  c
}
