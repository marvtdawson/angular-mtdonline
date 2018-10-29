import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminService {
  user$: Observable<firebase.User>;

  constructor(private http: HttpClient,
              private afStore: AngularFirestore,
              private afAuth: AngularFireAuth,
              private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

 /* private socialSignIn(provider: number): firebase.Promise<FirebaseAuthState> {
    return this.afAuth.auth.signInWithRedirect({provider, method: AuthMethods.Popup})
      .then( () => this.updateUserData() )
      .catch(error => console.log(error));
  }*/

  /**
   * Log In With Google
   */
  loginWithGoogle() {
    // const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
    // localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  /**
   * Log In With Facebook
   */
  loginWithFacebook() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  /**
   * Log In With Twitter
   */
  loginWithTwitter() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider());
  }


  /**
   *  Login with email and password
   */
  signInWithEmailAndPassword(email: string, password: string) {
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
