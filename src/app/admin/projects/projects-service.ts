import { Injectable } from '@angular/core';
import { ProjectsInterface } from './projects-interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: ProjectsInterface[] = [];

  constructor(private db: AngularFireDatabase ) { }

  getAllProjects() {
    this.db.list('projects').snapshotChanges()
      .pipe(map(actions => actions.map(a => ({ key: a.key, ...a.payload.val() }))
      )
    ).subscribe(projects => {
        return projects.map(project => project.key);
      });
  }
}
