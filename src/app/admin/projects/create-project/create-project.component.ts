import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FrameworksService } from '../../../../providers/frameworks/frameworks.service';
import { Router } from '@angular/router';
// import { ProjectsInterface } from '../projects-interface';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  createProjectForm: FormGroup;
  formOptions: FormGroup;
  // createProject: ProjectsInterface[] = [];
  frameworks$;

  constructor(private formBuilder: FormBuilder,
              private frameworkService: FrameworksService,
              private router: Router) {
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
    // creaete new project
   this.frameworkService.createProject(project);
   // navigate to list project page
   this.router.navigate(['admin/projects/list-projects']);
  }

  onImageUpload() {

  }

}
