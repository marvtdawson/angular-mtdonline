import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProjectsInterface } from '../projects-interface';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  createProjectForm: FormGroup;
  formOptions: FormGroup;
  createProject: ProjectsInterface[] = [];

  constructor(private formBuilder: FormBuilder) {
    // allows angular material to float input label
    this.formOptions = this.formBuilder.group({
      floatLabel: 'auto'
    });
  }

  ngOnInit() {
    this.createProjectForm = new FormGroup({
     'title': new FormControl(null, [
       Validators.required]),
      'frameworkType': new FormControl(null, Validators.required),
      'summary': new FormControl(null, Validators.required)
    });
  }

  onCreateProject(project) {
    this.createProject.push(project);
  }

}
