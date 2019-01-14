import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Meta, Title} from '@angular/platform-browser';

import {SiteDataService} from '../../../../providers/site-data/site-data.service';
import { ProjectsInterface } from '../projects-interface';

// import { ProjectsService } from '../projects-service';
import {ProjectsService} from '../projects-service';


@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  // projects: ProjectsInterface[] = [];
  projectsCollection: AngularFirestoreCollection<ProjectsInterface>;
  projects$: Observable<ProjectsInterface[]>;
  // projects$: AngularFireList<ProjectsInterface[]>;

  pageTitle = 'Projects List';
  pageDescription = 'List of recently created projects';

  constructor(private db: AngularFireDatabase,
              private afStore: AngularFirestore,
              private metaData: Meta,
              private titleService: Title,
              private siteData: SiteDataService
              // private projectService: ProjectsService
              ) {
    this.titleService.setTitle(this.pageTitle );
    this.metaData.addTags([
      {name: 'description', content: this.pageDescription},
      {name: 'keywords', content: this.siteData.siteKeywords},
      {name: 'author', content: this.siteData.siteName}
    ]);
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
  ];*/

  ngOnInit() {
    // this.projects$ = this.projectService.getProjects();

    // this.projects$ = this.projectService.getAllProjects();

     this.projectsCollection = this.afStore.collection('projects');
     this.projects$ = this.projectsCollection.valueChanges();
     console.log('Here are your projects from the database: ' + this.projects$);

  }

}
