import { Component, OnInit } from '@angular/core';
import { Boss } from 'src/app/shared/models/boss';
import { UserService } from 'src/app/shared/services';
import { Router } from '@angular/router';
import { Company } from 'src/app/shared/models/company';
import { JobService } from 'src/app/shared/services/job.service';
import * as  sha256 from 'async-sha256';

import{Global} from 'src/app/global';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
@Component({
  selector: 'app-boss-register',
  templateUrl: './boss-register.component.html',
  styleUrls: ['./boss-register.component.css']
})
export class BossRegisterComponent implements OnInit {
 currentBoss:Boss=new Boss();
 public company:Company[];
 private subscriber;
 public notRegistered:Boolean=false;

  
  constructor(private userService:UserService,private router: Router,private jobService:JobService) {}
  ngOnInit() {
    this.subscriber = this.jobService.getCompanies().subscribe(state => {
      this.company = state;
      this.currentBoss=this.userService.boss;
    });
// this.currentBoss=this.global.CurrentBoss;
  }
async  register(BossIsConnection) {
  this.currentBoss.BossPassword = await sha256(this.currentBoss.BossPassword);

   this.currentBoss.BossIsConnection= BossIsConnection.checked;
    this.userService.registerBoss(this.currentBoss).subscribe(res => {
      if(res)
      {
        this.userService.boss=res;
        this.userService.user=null;
        localStorage.setItem("token",this.currentBoss.BossPassword);
        localStorage.setItem("isBoss","1");

        // localStorage.setItem("UserPassword",this.currentUser.password);
        localStorage.setItem("UserMail",res.BossMail);
        localStorage.setItem("UserName",res.BossName);
        localStorage.setItem("UserId",res.BossId.toString());
        // this.global.CurrentBoss=res;
        this.currentBoss=res;

      Swal.fire({
        title: 'success!',
        text: 'נרשמת בהצלחה!!!',
        type: 'success',
        confirmButtonText: 'המשך'
      })
      this.router.navigate(['home']);

      // localStorage.setItem("BossId",this.currentBoss.BossId.toString());
      localStorage.setItem("BossCompanyId",this.currentBoss.BossCompanyId.toString());
    }
      if(!res){
      Swal.fire({
        title: 'שגיאה!',
        text: 'ערכים לא נכונים!!!',
        type: 'error',
        confirmButtonText: 'מלא שוב'
      })
      }
      // this.router.navigate(['register/register-boss']);
      // document
    },
    err=>{
     
    })
  }
  addCompany(){
 this.userService.keepBoss(this.currentBoss);
    this.notRegistered= true;
    localStorage.setItem("bossAddCompany","1");

  }
  company1(id:number){
    this.currentBoss.BossCompanyId=id;

  }
  }  
