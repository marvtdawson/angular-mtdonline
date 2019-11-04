import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$: Observable<firebase.User>;

  constructor(private afDB: AngularFireDatabase) { }

  getUser() {

  }

  save(user: firebase.User) {
    this.afDB.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

}
