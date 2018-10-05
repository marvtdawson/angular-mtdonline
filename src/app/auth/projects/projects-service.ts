import { Injectable } from '@angular/core';
import { ProjectsInterface } from './projects-interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: ProjectsInterface[] = [];

  constructor() { }
}
