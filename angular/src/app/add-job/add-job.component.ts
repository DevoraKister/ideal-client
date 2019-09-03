import { Component, OnInit } from '@angular/core';
import { JobView } from '../shared/models/jobView';
import { JobParameters } from '../shared/models/JobParameters';
import { JobService } from 'src/app/shared/services/job.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  private currentJob:JobView=new JobView();
  private jobparam:JobParameters;
  private subscriber;

  constructor(private jobservice:JobService,private router: Router) { }

  ngOnInit() 
  {

    
    this.subscriber = this.jobservice.getJobParameters().subscribe(state => {
      this.jobparam = state;
    });
  }


  addParts( Workspace,outnet,parts,subjectjob)
  {
    this.currentJob.WSName=Workspace.value;
    this.currentJob.OutNetName=outnet.value;
    this.currentJob.PartName=parts.value;
    this.currentJob.SubjectName=subjectjob.value;
    this.currentJob.CompanyId=parseInt(localStorage.getItem("BossCompanyId"));
    // this.currentJob.CompanyId=parseInt(localStorage.getItem("BossCompanyId"));
    this.currentJob.BossId=parseInt(localStorage.getItem("BossId"));

    this.add();
  }

  add(){
   this.jobservice.addJob(this.currentJob).subscribe(res => {
    Swal.fire({
      title: 'success!',
      text: 'נרשמת בהצלחה!!!',
      type: 'success',
      confirmButtonText: 'המשך'
    })
    this.router.navigate(['home']);
  },
  err=>{})
  }
}