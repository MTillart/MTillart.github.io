import { Component } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { TokenPayload } from '../_models/user';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
    console.log("Reged!")
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/');
    }, (err) => {
      console.error(err);
    });
  }
}