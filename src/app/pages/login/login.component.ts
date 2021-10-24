import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  isLoggedIn = false;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    // login form
    this.logInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitlogInForm(formValue: any) {}

  // async submitlogInForm(formValue: any) {

  //   await this.authService.logIn(formValue.email, formValue.password);
  //   if (this.authService.isLoggedIn) this.isLoggedIn = true;
  // }
}