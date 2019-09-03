import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services';
import { User } from '../shared/models/user';
import { SubjectJob } from '../shared/models/subjectJob';
import { JobService } from '../shared/services/job.service';
import { JobParameters } from '../shared/models/JobParameters';
import Swal from 'sweetalert2'
import { TimeSmartAgent } from '../shared/models/time';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { LoginUserComponent } from '../login/login-user/login-user.component';
@Component({
  selector: 'app-smart-agent',
  templateUrl: './smart-agent.component.html',
  styleUrls: ['./smart-agent.component.css']
})
export class SmartAgentComponent implements OnInit {
  currentUser: User = new User();
  details: boolean;


  time: TimeSmartAgent[] = [
    { id: 4, name: 'מיידי ' },
    { id: 1, name: 'יומי' },
    { id: 2, name: 'שבועי' },
    { id: 3, name: 'חודשי ' },

  ];
  // private subjectJob: SubjectJob[];
  private jobParameters: JobParameters = new JobParameters();

  constructor(private router: Router, private userService: UserService, private jobService: JobService,public dialog: MatDialog) {
    this.userService.userObs.subscribe(data => {
      this.getUser(data);
    })
  }

  ngOnInit() {
    this.details = true;
    this.getUser(this.userService.user);
    this.jobService.getJobParameters().subscribe(state => {
      this.jobParameters = state;

    });
   if(!this.userService.user){
      const dialogRef = this.dialog.open(LoginUserComponent, {
        // width: '250px',
        height: '250px',
        // data: {name: this.name, animal: this.animal}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }
  
  }
  
  getUser(data) {
    this.currentUser = data;
  }


  updateDetails() {
    this.currentUser.UserIsSmartAgent = true;

    this.userService.updateUser(this.currentUser).subscribe(res => {
      this.userService.user = res;


      Swal.fire({
        title: 'הפרטים עודכנו בהצלחה!',
        // text: this.name,
        type: 'success',
        confirmButtonText: 'המשך'
      })

    })
    this.details = false;
  }

}
