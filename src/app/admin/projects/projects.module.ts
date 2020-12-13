import { NgModule} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { AngularMaterialModule } from '../../angular-material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CreateProjectComponent,
    ListProjectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class ProjectsModule {

}
