import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {JobService} from '../app/shared/services/job.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginBossComponent } from './login/login-boss/login-boss.component';
import { AdvComponent } from './home/adv/adv.component';
import { JobTableComponent } from './home/job-table/job-table.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { RabanimComponent } from './rabanim/rabanim.component';
import { InformationComponent } from './information/information.component';
import { SmartAgentComponent } from './smart-agent/smart-agent.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,MatFormFieldModule ,MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,MatPaginatorModule
} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {NgxDocViewerModule}from 'ngx-doc-viewer'
import { BossRegisterComponent } from './login/boss-register/boss-register.component';
import { UserRegisterComponent } from './login/user-register/user-register.component';
import { UserService } from './shared/services';
import { ShortStringPipe } from './short-string.pipe';
import { AddJobComponent } from './add-job/add-job.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { SurveyComponent } from './survey/survey.component';
import { ConnectComponent } from './connect/connect.component';

import { SignToJobComponent } from './sign-to-job/sign-to-job.component';
import { JobToCheckComponent } from './manager/job-to-check/job-to-check.component';
import { ManagerService } from './shared/services/manager.service';
import { AuthGuard } from './auth.guard';
import { HeaderManagerComponent } from './manager/header-manager/header-manager.component';
import { SignToJobManagerComponent } from './manager/sign-to-job-manager/sign-to-job-manager.component';
import { WatchingCompaniesComponent } from './manager/watching-companies/watching-companies.component';
import { RecomendComponent } from './recomend/recomend.component';
import { from } from 'rxjs';
import { ForumComponent } from './forum/forum.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AnswerFromRavComponent } from './manager/answer-from-rav/answer-from-rav.component';
import { SignedUsersComponent } from './signed-users/signed-users.component';
import { RecommendsShowComponent } from './recommends-show/recommends-show.component';
import { AutocomleteValidateDirective } from './directives/autocomlete-validate.directive';
import { CityPipePipe } from './city-pipe.pipe';
import { ShowOneJobComponent } from './show-one-job/show-one-job.component';
import {NumbersComponent} from './home/numbers/numbers.component';
import { GetStatisticsComponent } from './manager/get-statistics/get-statistics.component';
import { CvToSendComponent } from './manager/cv-to-send/cv-to-send.component';
// import { ForumComponent } from './shared/models/forum/forum.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
    children: [
      { path: 'login-user', component: LoginUserComponent },
      { path: 'login-boss', component: LoginBossComponent },
      { path: 'register-user', component: UserRegisterComponent },
      { path: 'register-boss', component: BossRegisterComponent },
    ]
  },
  //
  {
    path: 'register', component: LoginComponent,
    children: [
      { path: 'register-user', component: UserRegisterComponent },
      { path: 'register-boss', component: BossRegisterComponent },
    ]
  },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'job-table', component: JobTableComponent },
      { path: 'adv', component: AdvComponent }
    ]
  },
  { path: 'information', component: InformationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'rabanim', component: RabanimComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'smart-agent', component: SmartAgentComponent },
  { path: 'add-job', component: AddJobComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'recomend', component: RecomendComponent },
  { path: 'show-recommend/:id', component: RecommendsShowComponent },
  { path: 'sign-to-job/:id', component: SignToJobComponent },
  { path: 'show-jobs/:str', component: ShowOneJobComponent },

  { path: '', component: HomeComponent },

  //manager
  { path: 'check', component: JobToCheckComponent},
  // { path: 'check', component: JobToCheckComponent,canActivate:[AuthGuard] },
  { path: 'answer-from-rav', component: AnswerFromRavComponent},
  { path: 'statistic', component: GetStatisticsComponent},
  { path: 'sign-to-job-manager', component: SignToJobManagerComponent },
  {path:'signed-users/:jobid',component:SignedUsersComponent},
  { path: 'header-manager', component: HeaderManagerComponent,canActivate:[AuthGuard] },
  { path: 'watching-companies', component: WatchingCompaniesComponent,canActivate:[AuthGuard] },
  { path: 'cvUserToSend', component: CvToSendComponent},
  // { path: 'cvUserToSend/:userId', component: CvToSendComponent,canActivate:[AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginBossComponent,
    AdvComponent,
    NumbersComponent,
    JobTableComponent,
    LoginUserComponent,
    AboutComponent,
    RabanimComponent,
    InformationComponent,
    SmartAgentComponent,
   JobPostingComponent,
   BossRegisterComponent,
   UserRegisterComponent,
   UserRegisterComponent,
   ShortStringPipe,
   AddJobComponent,
   AddCompanyComponent,
   SurveyComponent,
   ConnectComponent,
   SignToJobComponent,
   JobToCheckComponent,
   HeaderManagerComponent,
   SignToJobManagerComponent,
   WatchingCompaniesComponent,
   RecomendComponent,
   ForumComponent,
   AnswerFromRavComponent,
   SignedUsersComponent,
   RecommendsShowComponent,
   AutocomleteValidateDirective,
   CityPipePipe,
   ShowOneJobComponent,
   GetStatisticsComponent,
   CvToSendComponent,





  ],
  imports: [
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,

    RouterModule.forRoot(
      routes,
      {
        enableTracing: true
       }
    ),
    ReactiveFormsModule,
    PdfViewerModule,
    NgxDocViewerModule

  ],
  // exports:[

  //   MatToolbarModule,
  //   MatButtonModule,
  //   MatCardModule,
  //   MatInputModule,
  //   MatDialogModule,
  //   MatTableModule,
  //   MatMenuModule,
  //   MatIconModule,
  //   MatProgressSpinnerModule
  // ],
  providers: [
    JobTableComponent,
    UserService,
    JobService,
    ManagerService,
    AddCompanyComponent,
    BossRegisterComponent,
    HeaderComponent,
    AuthGuard,
    ForumComponent,
    RecommendsShowComponent,
    CvToSendComponent
    ,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
