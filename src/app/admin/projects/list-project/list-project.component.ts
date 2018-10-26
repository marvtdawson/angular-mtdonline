import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects-service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  projects$;

  constructor(private projectService: ProjectsService) {
    this.projects$ = this.projectService.getAllProjects();
  }

  ngOnInit() {
  }

}
