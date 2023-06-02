import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticatorService } from '../Services/authenticator.service';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-admin-log-in',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './admin-log-in.component.html',
  styleUrls: ['./admin-log-in.component.css']
})
export class AdminLogInComponent {
  form!:FormGroup

  errorMessage=null
  constructor( private fb:FormBuilder,
  private authenticatorService:AuthenticatorService,
  private router:Router, 
  private userService:UserService
  ){}
  ngOnInit(): void {
    this.form= this.fb.group({
      email:['', [Validators.required]],
      password:['', [Validators.required]],
    })
}

SubmitForm(){
this.userService.logInUser(this.form.value).subscribe(
res=>{
  this.errorMessage=null
  this.authenticatorService.logIn(res)
  this.router.navigate(['/add'])
},
err=>{
  this.errorMessage=err.error.message
}
)
}
}
