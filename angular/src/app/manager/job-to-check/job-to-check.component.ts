import { Component, OnInit } from '@angular/core';
import { JobView } from 'src/app/shared/models/jobView';
import { ManagerService } from 'src/app/shared/services/manager.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-job-to-check',
  templateUrl: './job-to-check.component.html',
  styleUrls: ['./job-to-check.component.css']
})
export class JobToCheckComponent implements OnInit {
  private allJobs:JobView[];
  private Jobs:JobView[];
  private length = 0;
  private pageSize = 8;
  private pageSizeOptions: number[] =null;
  private pageEvent: PageEvent;

  constructor(private managerService:ManagerService) { }

  ngOnInit() {
    this.managerService.getJobToCheck().subscribe(res=>{
      this.allJobs=res;
      this.length=res.length;
      this.fillJobs(0);
    })
  }
  OKTheJob(JobId:number){
this.managerService.okTheCheck(JobId).subscribe(res=>{
if(res){
  this.managerService.getJobToCheck().subscribe(res=>{
    this.allJobs=res;
    this.length=res.length;
    this.fillJobs(0);
  })
}
})
  }
  fillJobs(pageIndex){  
    this.Jobs=this.allJobs.slice(pageIndex*this.pageSize,(pageIndex+1)*this.pageSize);
    }
    getServerData(event)
{ 
  this.fillJobs(event.pageIndex);  
}

}
