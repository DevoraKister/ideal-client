import { Component, OnInit } from '@angular/core';
import { Survey } from '../shared/models/survey';
import { Router } from '@angular/router';
import { JobService } from '../shared/services/job.service';
import { Subject } from 'rxjs';
import { SubjectJob } from '../shared/models/subjectJob';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  s: Survey = new Survey();
  sub: SubjectJob[];
  countOpen: number;

  constructor(private router: Router, private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getJobParameters().subscribe(res => {
      this.sub = res.SubjectJob;
      if (localStorage.getItem("SurveyOpened")) {
        this.countOpen = parseInt(localStorage.getItem("SurveyOpened"));
        if (this.countOpen < 3) {
          this.countOpen++;
          localStorage.setItem("SurveyOpened", this.countOpen.toString());
        }
        else (localStorage.setItem("SurveyOpened", "stop"));
      }
      else
        localStorage.setItem("SurveyOpened", '1');
    })
  }
  sendSurvey() {
    this.jobService.sendSurvey(this.s).subscribe(res => {
      localStorage.setItem("SurveyOpened", "stop");

    }
      , err => {

      })
  }
}
