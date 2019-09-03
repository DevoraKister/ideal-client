import { Component, OnInit } from '@angular/core';
import { Question } from '../shared/models/question';
import { UserService } from '../shared/services';
import { ForumService } from '../shared/services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  currentQuestion:Question;
  questionsList:Question[];
  constructor(private userService:UserService,private forumService:ForumService) { }

  ngOnInit() {
    this.forumService.getForum().subscribe(res=>{
      this.questionsList=res;
      console.log(this.questionsList);
    })
  }
  askQuation(){
this.forumService.askQuetion(this.currentQuestion).subscribe(res=>{

})
  }
}
