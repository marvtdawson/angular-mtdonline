import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FrameworksService {

  constructor(private db: AngularFireDatabase,
              private afStore: AngularFirestore) { }

  getFrameworks() {
    return this.db.list('/frameworks', ref => ref.orderByChild('name'));
  }

  createProject(project) {
    // saved to real time database
    // return this.db.list('/projects').push(project);

    // save to firestore database
    return this.afStore.collection('projects').add(project);
  }
}
