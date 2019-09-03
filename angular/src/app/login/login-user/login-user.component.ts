import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import * as  sha256 from 'async-sha256';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Global } from 'src/app/global';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  currentUser: User = new User();
  private name = "היי ";
  registerForm: FormGroup;
  submitted = false;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]

    });
    // this.currentUser=this.global.CurrentUser;
  }
  get f() { return this.registerForm.controls; }

  async login() {
    var z;
    // this.currentUser.Password=this.registerForm.controls["password"].value;
    // this.currentUser.UserMail=this.registerForm.controls["email"].value;
    this.currentUser.password = await sha256(this.currentUser.password);
    localStorage.setItem("token", this.currentUser.password);
    debugger;
    this.userService.login(this.currentUser)
      .subscribe((res: any) => {
        if (res) {
          this.userService.user = res;
          this.userService.boss = null;
          this.userService.setUser(res);
          localStorage.setItem("token", this.currentUser.password);
          // localStorage.setItem("UserPassword",this.currentUser.password);
          localStorage.setItem("UserMail", res.UserMail);
          localStorage.setItem("UserName", res.UserName);
          localStorage.setItem("UserId", res.UserId.toString());
          //  שינוי 
          // var token = JSON.parse(res.Value.TokenJson)
          // this.userService.changeToken(token.access_token);

          var user = res.Value.User;
          //  שינוי 

          // localStorage.token = token.access_token;

          this.userService.boss = null;
          this.name += res;
          Swal.fire({
            title: 'success!',
            text: " היי" + "" + user.UserName,
            type: 'success',
            confirmButtonText: 'המשך'
          })


        }

        else {

          Swal.fire({
            title: 'שגיאה!',
            text: ' המשתמש לא קיים במערכת !!!',
            type: 'error',
            confirmButtonText: 'הרשם עכשיו '
          })
          this.router.navigate(['register/register-user']);

        }
      },
        err => {

        })
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)')
  }
}

