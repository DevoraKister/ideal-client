import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { LoginBossComponent } from './login/login-boss/login-boss.component';
import { HomeComponent } from './home/home.component';
import { JobTableComponent } from './home/job-table/job-table.component';
import { InformationComponent } from './information/information.component';
import { RabanimComponent } from './rabanim/rabanim.component';
import { SmartAgentComponent } from './smart-agent/smart-agent.component';
import { AboutComponent } from './about/about.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { AdvComponent } from "src/app/home/adv/adv.component";
import { BossRegisterComponent } from './login/boss-register/boss-register.component';
import { UserRegisterComponent } from './login/user-register/user-register.component';


// const routes: Routes = [
//   {
//     path: 'login', component: LoginComponent,
//     children: [
//       { path: 'login-user', component: LoginUserComponent },
//       { path: 'login-boss', component: LoginBossComponent },
//       { path: 'boss-register', component: BossRegisterComponent },
//       { path: 'user-register', component: UserRegisterComponent }
//     ]
//   },
//   {
//     path: 'home', component: HomeComponent,
//     children: [
//       { path: 'job-table', component: JobTableComponent },
//       { path: 'adv', component: AdvComponent }
//     ]
//   },
//   { path: 'information', component: InformationComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'rabanim', component: RabanimComponent },
//   { path: 'smart-agent', component: SmartAgentComponent },
//   { path: 'job-posting', component: JobPostingComponent },

//   { path: '', component: HomeComponent }
// ];
@NgModule({
  imports: [
    // RouterModule.forRoot(
    //   routes,
    //   { 
    //     enableTracing: true
    //    } 
    // ),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }





