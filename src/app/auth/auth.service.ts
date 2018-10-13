import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private http: HttpClient,
              private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

    /**
     * Login with Google
     */
    loginWithGoogle(){
      this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    /**
     * Login with Facebook
     */
    loginWithFacebook(){
      this.afAuth.auth.signInWithRedirect((new firebase.auth.FacebookAuthProvider()));
    }

    /**
     *  Login with email and password
     */
    signInWithEmailAndPassword(){
      // sign in with email and password using firebase
      /*this.authService.signInWithEmailAndPassword(credentials)
        .subscribe(result => {
          if (result) {
            this.router.navigate(['login']);
          }
          this.invalidLogin = true;
        });*/
    }

    /**
     * Check if user is logged in
     */
    isLoggedIn(){ return false; }

  /**
   * Log user out
   */
  logUserOut() {
    this.afAuth.auth.signOut();
  }

  /**
     * Create a new project
     */
    createNewClientProject(){}

}
