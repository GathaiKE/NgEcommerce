import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {HttpClientModule} from '@angular/common/http'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../Services/user.service';
import { LogInSuccess } from '../Interfaces/user';
import { AuthenticatorService } from '../Services/authenticator.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
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
    this.router.navigate(['/'])
  },
  err=>{
    this.errorMessage=err.error.message
  }
)
}
}
