import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FrameworksService } from '../../../../providers/frameworks/frameworks.service';
import { Router } from '@angular/router';
import {SiteDataService} from '../../../../providers/site-data/site-data.service';
import {Meta, Title} from '@angular/platform-browser';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {FrameworksInterface} from '../../../../contracts/frameworks/frameworks.interface';
import {Observable} from 'rxjs';
// import { ProjectsInterface } from '../projects-interface';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  pageTitle = 'Create A Project';
  pageDescription = 'Create A New Project';

  createProjectForm: FormGroup;
  formOptions: FormGroup;
  // createProject: ProjectsInterface[] = [];
  frameworksCollection: AngularFirestoreCollection<FrameworksInterface>;
  frameworks$: Observable<FrameworksInterface[]> ;

  constructor(private formBuilder: FormBuilder,
              private frameworkService: FrameworksService,
              private afStore: AngularFirestore,
              private router: Router,
              private metaData: Meta,
              private titleService: Title,
              private siteData: SiteDataService) {

    this.titleService.setTitle(this.pageTitle );
    this.metaData.addTags([
      {name: 'description', content: this.pageDescription},
      {name: 'keywords', content: this.siteData.siteKeywords},
      {name: 'author', content: this.siteData.siteName}
    ]);

    // allows angular material to float input label
    this.formOptions = this.formBuilder.group({
      floatLabel: 'auto'
    });
  }

  ngOnInit() {

    this.frameworksCollection = this.afStore.collection('frameworks', ref => {
      return ref.orderBy('name', 'desc');
    });

    console.log(this.frameworksCollection);
    this.frameworks$ = this.frameworksCollection.valueChanges();
    // create form attrbs
    this.createProjectForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'frameworkType': new FormControl(null, Validators.required),
      'summary': new FormControl(null, Validators.required)
    });
  }

  onCreateProject(project) {
    // create new project
   this.frameworkService.createProject(project);
   // navigate to list project page
   this.router.navigate(['admin/projects/list-projects']);
  }

  onImageUpload() {

  }

}
