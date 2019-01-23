import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FrameworksService } from '../../../../providers/frameworks/frameworks.service';
import { Router } from '@angular/router';
import {SiteDataService} from '../../../../providers/site-data/site-data.service';
import {Meta, Title} from '@angular/platform-browser';
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
  frameworks$;

  constructor(private formBuilder: FormBuilder,
              private frameworkService: FrameworksService,
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
    this.frameworks$ = this.frameworkService.getFrameworks().snapshotChanges();

  }

  ngOnInit() {
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
