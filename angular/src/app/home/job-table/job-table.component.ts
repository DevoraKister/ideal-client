import { Component, OnInit } from '@angular/core';
import { Part } from 'src/app/shared/models/part';
import { JobService } from 'src/app/shared/services/job.service';
import { Area } from 'src/app/shared/models/area';
import { City } from 'src/app/shared/models/city';
import { SubjectJob } from 'src/app/shared/models/subjectJob';
import { JobParameters } from 'src/app/shared/models/JobParameters';
import { UserService } from 'src/app/shared/services';
import { Router } from '@angular/router';
import { Job } from 'src/app/shared/models/job';
import { JobView } from 'src/app/shared/models/jobView';
import { PageEvent } from '@angular/material/paginator';
import { Recomend } from 'src/app/shared/models/recomend';
import { MatDialog } from '@angular/material/dialog';
import { RecommendsShowComponent } from 'src/app/recommends-show/recommends-show.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SignToJobComponent } from 'src/app/sign-to-job/sign-to-job.component';
// import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-job-table',
  templateUrl: './job-table.component.html',
  styleUrls: ['./job-table.component.css']
})



export class JobTableComponent implements OnInit {
  private cities: City[];
  private jobParameters: JobParameters;
  private jobs: JobView[];
  private allJobs: JobView[];
  private recommendList: Recomend[];
  private subscriber;
  private cityId = 1;
  private length = 0;
  private pageSize = 8;
  private pageSizeOptions: number[] = null;
  private pageEvent: PageEvent;

  currentRate = 8;

  constructor(private userService: UserService, private router: Router, private jobService: JobService,
    public dialog: MatDialog,
    private showRecommend: RecommendsShowComponent) { }

  ngOnInit() {
    this.subscriber = this.jobService.getJobParameters().subscribe(state => {
      this.jobParameters = state;
      this.jobService.getNewJobs().subscribe(s => {
        this.jobs = s;
        this.allJobs = s;
        this.length = s.length;
        this.fillJobs(0);
      });
    });
  }

  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  // }

  getCity(event) {
    this.jobService.getCity(event.target.value).subscribe(state => {
      this.cities = state;
    });
  }
  getJobs(area1, part1, sub1) {
    this.jobService.getAllJobs(this.cityId, area1.value, part1.value, sub1.value).subscribe(state => {
      this.allJobs = state;
      this.length = state.length;
      this.fillJobs(0);
    });
  }

  fillJobs(pageIndex) {
    this.jobs = this.allJobs.slice(pageIndex * this.pageSize, (pageIndex + 1) * this.pageSize);
  }


  getServerData(event) {
    this.fillJobs(event.pageIndex);
  }
  city(id: number) {
    this.cityId = id;
    //this.   .CompanyCityId=id;
  }
  registerToJob(idJob: number) {
    this.userService.registerToJob(idJob, this.userService.user.UserId).subscribe(s => {
      if (s) {

      }
    })
  }
 UpdateDetails(idJob: number) {
    if (localStorage.getItem("token") == null)
      this.router.navigate(['register/register-user', idJob]);
    else {

      const dialogRef = this.dialog.open(SignToJobComponent, {
        // width: '250px',
        height: '65hw',
        // לבדוק
        data: { id: idJob },

        // data: {name: this.name, animal: this.animal}
      });

      dialogRef.afterClosed().subscribe(result => {
        // console.log('סגירה');
        // this.animal = result;
      });
      // this.router.navigate(['sign-to-job', idJob]);
    }
  }
  getRecommend(idJob: number) {
    // this.jobService.getRecommendToJob(idJob).subscribe(res => {
    //   this.showRecommend.recommendList = res;
      // לבדוק

      const dialogRef = this.dialog.open(RecommendsShowComponent, {
        // width: '250px',
        height: '250px',
        data: { id: idJob },
      });

      dialogRef.afterClosed().subscribe(result => {
        // console.log('The dialog was closed');
        // this.animal = result;
      });
    // });
  }
}

