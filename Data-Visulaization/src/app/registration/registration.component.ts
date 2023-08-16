import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  registrationForm: FormGroup;
  submitted=true;
  loading=false;
  today=new Date();
  countryCodes = [
    { code: '+1', name: 'United States' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+91', name: 'India' },
    // Add more country codes 
  ];
  /**
   *
   */
  constructor(private fb:FormBuilder){
    this.registrationForm=this.fb.group({
    firstName:['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
    lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, this.passwordValidator(),Validators.minLength(8)]],
    gender:   ['', Validators.required],
    dob:      ['', Validators.required],
    aadharNumber: ['',[Validators.required, Validators.pattern(/^\d{12}$/)]],
    confirmPassword: ['', Validators.required],
    countryCode: ['', Validators.required],
    mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
  })

  }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
   console.log(this.registrationForm);
   
  }
  
  get d(){
    return this.registrationForm.controls;
  }

  maxDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  passwordValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      // Check for at least one uppercase letter
      if (!/[A-Z]/.test(value)) {
        return { uppercase: true };
      }

      // Check for at least one lowercase letter
      if (!/[a-z]/.test(value)) {
        return { lowercase: true };
      }

      // Check for at least one digit
      if (!/\d/.test(value)) {
        return { digit: true };
      }

      // Check for at least one title case letter
      if (!/\b\p{Lu}\p{Ll}*\b/u.test(value)) {
        return { titlecase: true };
      }

      return null;
    };
  }

}
