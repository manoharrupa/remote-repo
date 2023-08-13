import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from '../services/user-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted=true;
  loading=false;
  /**
   *
   */
  constructor(private lg :FormBuilder ,private userService:UserServicesService,private router:Router) {
    this.loginForm=this.lg.group({
    userName:['',Validators.required],
    password:['',Validators.required]
  });
  
  }
  get f(){
    return this.loginForm.controls;
  }
  onSubmit(){
    this.submitted = true;
 if (this.loginForm.invalid) {
            return;
        }
this.userService.save(this.loginForm.get('userName')?.value);
this.router.navigate(['home']);
  }
}
