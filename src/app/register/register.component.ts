import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form!:FormGroup
  errorMessage=null
  constructor( private fb:FormBuilder,
  private userService:UserService,private router:Router ){}


ngOnInit(): void {
  this.form= this.fb.group({
    username:['', [Validators.required]],
    email:['', [Validators.required]],
    password:['', [Validators.required]]
    })
  }

  SubmitForm(){
    this.userService.addUser(this.form.value).subscribe(
      res=>{
        res.message
        this.router.navigate(['logIn'])
      },
      err=>{
        this.errorMessage= err.error.message
      }
    )
  }
}
