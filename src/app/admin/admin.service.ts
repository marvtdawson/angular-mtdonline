import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {ActivatedRoute, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminService {

  user$: Observable<firebase.User>;

  constructor(private http: HttpClient,
              private afStore: AngularFirestore,
              private afAuth: AngularFireAuth,
              private router: Router,
              private actRoute: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  /**
   * Log In With Google
   */
  loginWithGoogle() {
    const returnUrl = this.actRoute.snapshot.queryParamMap.get('returnUrl') || ['/admin'] ;
    if (typeof returnUrl === 'string') {
      localStorage.setItem('returnUrl', returnUrl);
    }
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  /**
   * Login With Facebook
   */
  loginWithFacebook() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  /**
   * Login With Twitter
   */
  loginWithTwitter() {
    // this.afAuth.auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider());
  }

  /**
   *  Email and password authentication
   */
  signUpWithEmailandPassword(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(
        response => console.log(response)
      ).catch(
        error => console.log(error)
      );
  }

  /**
   *
   * @param email
   * @param password
   */
  signInWithEmailAndPassword(email: string, password: string) {
    // sign in with email and password using firebase
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        response => console.log('SIGNIN-SUCCESS', response)
      )
      .catch(error => console.log('SIGNIN-ERROR', error));
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
    this.router.navigate(['/login']);
  }

  /**
   * Create a new project
   */
  createNewClientProject() {}

}
