import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  registrationForm: FormGroup;
  submitted=true;
  loading=false;
  /**
   *
   */
  constructor(private fb:FormBuilder){
    this.registrationForm=this.fb.group({
    firstName:['', Validators.required],
    lastName: ['', Validators.required],
    email:    ['', Validators.required],
    password: ['', Validators.required],
    aadharNumber: ['', Validators.required],
    confirmPassword: ['', Validators.required]})

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  get d(){
    return this.registrationForm.controls;
  }
}
