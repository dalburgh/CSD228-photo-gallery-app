import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() { }

  signIn() {
    this.auth.signInWithEmail(this.email, this.password)
      .then(() => {
        // Sign in success
        this.router.navigate(['user-profile']);
      })
      .catch((error) => {
        // Sign in failed
        console.log(error);
        alert(error.message);
      });
  }
}
