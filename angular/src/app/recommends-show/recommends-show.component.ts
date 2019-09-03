import { Component, OnInit, Input } from '@angular/core';
import { JobService } from '../shared/services/job.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Recomend } from '../shared/models/recomend';
import {MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-recommends-show',
  templateUrl: './recommends-show.component.html',
  styleUrls: ['./recommends-show.component.css']
})

export class RecommendsShowComponent implements OnInit {
  // @Input() idJob: number;
   recommendList:Recomend[];
   IdJob:number;
   numRec:number=0;
  constructor(private jobService:JobService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.snapshot.params["id"];
    this.IdJob=parseInt( this.route.snapshot.params["id"]);
    this.jobService.getRecommendToJob(this.IdJob).subscribe(res=>{
      this.recommendList=res;
      this.numRec=this.recommendList.length;
      });
    debugger;
  }

}
