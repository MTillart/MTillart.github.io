import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router} from '@angular/router';

import {TokenPayload } from '../_models/user';
=======
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, TokenResponse, TokenPayload } from '../_models/user';
>>>>>>> 25352e81eb3cfab4a3a81c9fe722e3d2a253b194

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    console.log("Login started....")
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/');
    }, (err) => {
      console.error(err);
    });
  }
}