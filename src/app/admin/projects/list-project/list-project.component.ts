import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects-service';
import { ProjectsInterface } from '../projects-interface';


@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  projects: ProjectsInterface[] = [];
  projects$;

  constructor(private projectService: ProjectsService) {
    this.projects$ = this.projectService.getAllProjects();
  }

  /*projects: ProjectsInterface[] = [
    {
      id: 'fjaidkakd39qee33_dka',
      title: 'Marvin Angular Portfolio',
      frameworkType: 'Angular',
      summary: 'My online portfolio is made with Angular 6',
      imagePath: '../../assets/img/path_to_angular_image'
    },
    {
      id: 'wafaahetjkjwkdk',
      title: 'Marvin React Portfolio',
      frameworkType: 'React',
      summary: 'My online portfolio is made with React 16',
      imagePath: '../../assets/img/path_to_react_image'
    }
  ];
  */


  ngOnInit() {
    this.projects$ = this.projectService.getProjects();
  }

}
