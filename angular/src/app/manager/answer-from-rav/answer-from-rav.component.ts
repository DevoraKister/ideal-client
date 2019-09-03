import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/models/question';
import { ManagerService } from 'src/app/shared/services/manager.service';
import { Router } from '@angular/router';
import { TopicQuestion } from 'src/app/shared/models/topicQuestion';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForumComponent } from 'src/app/forum/forum.component';

@Component({
  selector: 'app-answer-from-rav',
  templateUrl: './answer-from-rav.component.html',
  styleUrls: ['./answer-from-rav.component.css']
})
export class AnswerFromRavComponent implements OnInit {
currentQuestion:Question=new Question();
 topics:TopicQuestion[];
 registerForm: FormGroup;
 submitted=false;
  constructor(private managerService:ManagerService,private router:Router,private formBuilder: FormBuilder,private forumComponent:ForumComponent) { }

  ngOnInit() {
    this.managerService.getTopicQuestion().subscribe(res=>{
      this.topics=res;
    })
    this.registerForm = this.formBuilder.group({
      question: ['', Validators.required],
      answer: ['', [Validators.required]],
      // phone: ['', [Validators.required,Validators.minLength(7),Validators.maxLength(10)]],
      topic: ['', [Validators.required]],

    
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit()
   {
      this.submitted = true;
      // stop here if form is invalid
     if (this.registerForm.invalid) {
       return;
     }
      // this.currentQuestion.Question1=this.registerForm.controls["question"].value;
      // this.currentQuestion.Answer=this.registerForm.controls["answer"].value;
      this.currentQuestion.QueTopicId=this.registerForm.controls["topic"].value;
     
      this.managerService.addQuestionfromRav(this.currentQuestion).subscribe(res=>{
this.forumComponent.questionsList=res;
      })

}
}