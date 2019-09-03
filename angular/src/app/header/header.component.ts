import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../shared/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {
private name;

hi:boolean=false;
list:number[]=[1,2,3]
  constructor(public userService: UserService,private router: Router) { }

   ngOnInit() {
  //  this.currentUser=await
  // this.isUser=this.userService.isUser;
  if(this.userService.boss.BossName||this.userService.user.UserName)
  this.hi=true;
  // if(this.userService.user.UserName)
  // this.hi=false;
  }

  

scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }

isBoss(){
  if(localStorage.getItem("isBoss"))
  this.router.navigate(['add-job']);
  else
  this.router.navigate(['register/register-boss']);
}
isUser(){
  

}

}


