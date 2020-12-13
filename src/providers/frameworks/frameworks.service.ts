import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FrameworksService {

  constructor(private afStore: AngularFirestore) { }

  getFrameworks() {
    console.log(`this.afStore`);
    return this.afStore.collection('frameworks');
  }

  createProject(project) {
    // save to firestore database
    return this.afStore.collection('projects').add(project);
  }
}
