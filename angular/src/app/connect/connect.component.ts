import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services';
import Swal from 'sweetalert2'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  myModel: any;
  datemask = "/\d/g";
 createForm() {
  this.registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['', [Validators.required,Validators.minLength(7),Validators.maxLength(10)]],
    // phone: ['', [Validators.required,Validators.minLength(7),Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    details:['', Validators.required],
    subject:['', Validators.required]
  
});
}

  constructor(private router:Router,private userService:UserService,private formBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
    
  }
  get f() { return this.registerForm.controls; }

  onSubmit()
   {
      this.submitted = true;
      // stop here if form is invalid
     if (this.registerForm.invalid) {
       return;
     }
      let name=this.registerForm.controls["name"].value;
      let phone=this.registerForm.controls["phone"].value;
      let email=this.registerForm.controls["email"].value;
      let details=this.registerForm.controls["details"].value;
      let subject=this.registerForm.controls["subject"].value;
      this.userService.connect(name,details,email,phone,subject).subscribe(res=>{
        if(res){
          Swal.fire({
            title: 'תודה שפנית אלינו!',
            text:" ,  פניתך התקבלה לטיפול בהקדם  ",
            type: 'success',
            confirmButtonText: 'המשך'
          })
        }
      })
  }

   


}
