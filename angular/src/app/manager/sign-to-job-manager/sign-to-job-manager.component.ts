import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/shared/services/manager.service';
import { Sign } from 'src/app/shared/models/sign';
import { JobView } from 'src/app/shared/models/jobView';
import {MatTableModule} from '@angular/material/table';
import { User } from 'src/app/shared/models/user';
import { MatDialog } from '@angular/material';
import { CvToSendComponent } from '../cv-to-send/cv-to-send.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-sign-to-job-manager',
  templateUrl: './sign-to-job-manager.component.html',
  styleUrls: ['./sign-to-job-manager.component.css'],

})
export class SignToJobManagerComponent implements OnInit
 {
  sign: Sign[];
  jobSign: JobView[];
  signedUser:User[];
  constructor(private router: Router, private managerService: ManagerService,public dialog: MatDialog,public cvToSend:CvToSendComponent) { }
  openDialog() 
  {
 
    
  }
  ngOnInit() {
    debugger;
    this.managerService.listSignedJob().subscribe(res => {
      this.jobSign = res;
    })
  }

  getSignedUsers(idJob:number)
  {

    this.managerService.userSignedToSpecificJob(idJob).subscribe(res=>{
      // this.signedUser=res;
this.cvToSend.signedUser=res;
this.cvToSend.jobId=idJob;
const dialogRef = this.dialog.open(CvToSendComponent, {
  // width: '250px',
  height: '65hw',
  // לבדוק

  // data: {name: this.name, animal: this.animal}
});
    });

  }
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
}
