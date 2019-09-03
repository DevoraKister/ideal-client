import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/services/alert.service';
import {  UserService } from 'src/app/shared/services';
import { Boss } from 'src/app/shared/models/boss';
import * as  sha256 from 'async-sha256';

import Swal from 'sweetalert2'
import { Global } from 'src/app/global';

@Component({
  selector: 'app-login-boss',
  templateUrl: './login-boss.component.html',
  styleUrls: ['./login-boss.component.css']
})
export class LoginBossComponent implements OnInit {
  currentBoss:Boss=new Boss();
  name: any;
  constructor(
    private userService: UserService,private router: Router) {}
      

  ngOnInit() {
// this.currentBoss=this.global.CurrentBoss;
  }
 async login() {
    this.currentBoss.BossPassword = await sha256(this.currentBoss.BossPassword);
    localStorage.setItem("token",this.currentBoss.BossPassword);
   
    this.userService.loginBoss(this.currentBoss).subscribe((res:any) => {
      if(res)
      {
this.userService.boss=res;
this.userService.user=null;
        localStorage.setItem("token",this.currentBoss.BossPassword);
        localStorage.setItem("BossCompanyId",res.BossCompanyId.toString());
        localStorage.setItem("isBoss","1");

        // localStorage.setItem("UserPassword",this.currentUser.password);
        localStorage.setItem("UserMail",res.BossMail);
        localStorage.setItem("UserName",res.BossName);
        localStorage.setItem("UserId",res.BossId.toString());
        // this.global.CurrentBoss=res;
      Swal.fire({
        title: 'success!',
        text: 'נרשמת בהצלחה!!!',
        type: 'success',
        confirmButtonText: 'המשך'
      })
      this.router.navigate(['home']);
      // this.currentBoss=res;
      // this.userService.boss=res;
      var token = JSON.parse(res.Value.TokenJson)
      this.userService.changeToken(token.access_token);

      var user = res.Value.User;
      localStorage.token = token.access_token;
      this.userService.setUser(user);
      this.userService.boss = null;
      this.name += res;
      // this.userService.user.UserName=null;
      // localStorage.removeItem("UserId");
      // localStorage.removeItem("UserMail");
      // localStorage.setItem("UserName",this.currentBoss.BossName);
      // localStorage.setItem("BossPassword",this.currentBoss.BossPassword);
      // localStorage.setItem("BossId",this.currentBoss.BossId.toString());
      // localStorage.setItem("BossCompanyId",this.currentBoss.BossCompanyId.toString());
      // if(this.currentBoss.BossPassword=="963852741+"&&this.currentBoss.BossMail=="idealToJob@gmail.com")
      // localStorage.setItem("manager","manager");
    }
      else{
        this.router.navigate(['register/register-boss']);
        localStorage.removeItem("BossPassword");
    }
    },
    err=>{
     
    })
  }
  }


// get f() { return this.loginForm.controls; }

// onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.loginForm.invalid) {
//         return;
//     }

//     this.loading = true;
//     this.authenticationService.login(this.f.username.value, this.f.password.value)
//         .pipe(first())
//         .subscribe(
//             data => {
//                 this.router.navigate([this.returnUrl]);
//             },
//             error => {
//                 this.alertService.error(error);
//                 this.loading = false;
//             });
// }
// }