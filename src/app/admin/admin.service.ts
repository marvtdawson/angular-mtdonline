import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {ActivatedRoute} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminService {
  user$: Observable<firebase.User>;

  constructor(private http: HttpClient,
              private afStore: AngularFirestore,
              private afAuth: AngularFireAuth,
              private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  /**
   * Log In With Google
   */
  loginWithGoogle() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
    localStorage.setItem('returnUrl', returnUrl);
  }

  /**
   * Log In With Facebook
   */
  loginWithFacebook() {
    /*this.afAuth.auth.login({
    provider: AuthProvider.Facebook,
    method: AuthMethods.Popup
  }).then(authState => {
    console.log('AFTER LOGIN', authState);
  });*/
  }

  /**
   * Log In With Twitter
   */
  loginWithTwitter() {}


  /**
   *  Login with email and password
   */
  signInWithEmailAndPassword(email, password) {
    // sign in with email and password using firebase
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .catch(error => console.log('REGISTER-ERROR', error));
  }

  /**
   * Check if user is logged in
   */
  isLoggedIn() { return false; }

  /**
   * Log user out
   */
  logUserOut() {
    this.afAuth.auth.signOut();
  }

  /**
   * Create a new project
   */
  createNewClientProject() {}

}
