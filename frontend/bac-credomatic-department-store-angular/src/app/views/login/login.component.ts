import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { EncrDecrService } from 'src/app/services/encr-decr.service';

const globalEncryptionKey: string = 'l1998U04!11$';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private userApiService: UserApiService,
    private encrDecr: EncrDecrService,
    private router: Router
  ) {}

  errorStatus: boolean = false;
  errorMessage: any = '';

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if (localStorage.getItem('token_pass')) {
      this.router.navigate(['dashboard']);
    }
  }

  onLogin(form: any) {
    this.userApiService.getUsers().subscribe((data) => {
      var encrPassword = this.encrDecr.set(globalEncryptionKey, form.password);

      for (var i = 0; i < data.length; i++) {
        if (data[i].email == form.email && data[i].password == encrPassword) {
          this.errorStatus = false;
          localStorage.setItem('token_pass', encrPassword);
          this.router.navigate(['dashboard']);
        }

        if (!this.errorStatus) {
          this.errorStatus = true;
          this.errorMessage = 'Usuario y/o contraseña inválido.';
        }
      }
    });
  }
}
