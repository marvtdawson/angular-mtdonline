import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalidLogin: boolean;
  constructor(public authService: AuthService) {
  }

  // sign in with Google credentials
  onLoginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  // sign in with Facebook credentials
  onLoginWithFacebook() {
    this.authService.loginWithFacebook();
  }

  // sign in using email and password
  onLoginWithEmailandPassword() {
    this.authService.signInWithEmailAndPassword();
  }
}
