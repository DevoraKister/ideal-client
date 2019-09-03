import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../shared/services/manager.service';
import { User } from '../shared/models/user';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-signed-users',
  templateUrl: './signed-users.component.html',
  styleUrls: ['./signed-users.component.css']
})
export class SignedUsersComponent implements OnInit {

  signedUsers: User[];
  idJob: number;
  constructor(private router: Router, private managerService: ManagerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idJob = this.route.snapshot.params["idJob"];
    this.managerService.userSignedToSpecificJob(this.idJob).subscribe(res => {
      this.signedUsers = res;
    });

  }

}
