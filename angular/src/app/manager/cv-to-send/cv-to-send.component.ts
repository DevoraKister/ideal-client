import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-cv-to-send',
  templateUrl: './cv-to-send.component.html',
  styleUrls: ['./cv-to-send.component.css']
})
export class CvToSendComponent implements OnInit {
public  signedUser:User[];
public  jobId:number;
  constructor() { }

  ngOnInit() {
    debugger;
  }

}
