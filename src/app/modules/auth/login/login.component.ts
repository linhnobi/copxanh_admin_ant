import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
    selector: 'cx-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private cookieService: CookieService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    console.log('this.validateForm :', this.validateForm);
    const body = this.validateForm.value;
    this.auth.login(body).subscribe( (res: any) => {
      console.log('res :', res);
      const token = res.data.token;
      localStorage.setItem('token', token);
      this.cookieService.set('copxanh', token);
      this.router.navigate(['admin']);
    })

  }

}
