import { Component } from '@angular/core';
import { User } from './shared/models/user';
import { Boss } from './shared/models/boss';
import {UserService} from './shared/services/user.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = new User();
    boss: Boss = new Boss();
  title = 'AngularIdial';
manager:boolean=false;
  constructor(){
    
    var id=localStorage.getItem("UserId");
    if(localStorage.getItem("manager"))
    this.manager=true;
  //   if(id!=null)
  //  this.getById(Number(id)).subscribe((res:User)=>{
  //      this.user=res;
  //  })
  }
  // ngOnInit() {
  //   $('.main-content').scrollspy({ target: '#home-nav' });
  // }

  

}
