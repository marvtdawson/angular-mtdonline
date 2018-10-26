import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FrameworksService {

  constructor(private db: AngularFireDatabase) { }

  getFrameworks() {
    return this.db.list('/frameworks', ref => ref.orderByChild('name'));
  }

  createProject(project) {
    return this.db.list('/projects').push(project);
  }
}
