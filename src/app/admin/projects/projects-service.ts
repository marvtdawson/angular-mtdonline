import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectsInterface } from './projects-interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: ProjectsInterface[] = [];
  private projectsUpdated = new Subject<ProjectsInterface[]>();

  constructor(private db: AngularFireDatabase,
              private http: HttpClient) {}

  getProjects() {
    this.http.get<{message: string, projects: ProjectsInterface[]}>('http://localhost:3000/api/projects')
      .subscribe((projectData) => {
        this.projects = projectData.projects;
        this.projectsUpdated.next([...this.projects]);
      });
  }

  getAllProjects() {
    this.db.list('projects').snapshotChanges()
      .pipe(map(actions => actions.map(a => ({ key: a.key, ...a.payload.val() }))
      )
    ).subscribe(projects => {
        return projects.map(project => project.key);
      });
  }
}
