import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;

  constructor() { }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  async signInWithEmail(email: String, password: String) {
    if (email === 'testuser' && password === 'temp') {
      this.loggedIn = true;
      alert('Welcome!');
    } else {
      throw new Error('Invalid credentials');
    }
  }
}
