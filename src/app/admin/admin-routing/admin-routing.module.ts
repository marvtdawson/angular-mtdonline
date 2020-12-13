import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {AdminComponent} from '../admin.component';
import {AdminGuardService} from '../../../providers/admin-guard/admin-guard.service';

import {ProjectsComponent} from '../projects/projects.component';
import {ContactedComponent} from '../contacted/contacted.component';
import {CreateProjectComponent} from '../projects/create-project/create-project.component';
import {ListProjectComponent} from '../projects/list-project/list-project.component';
import {SkillsComponent} from '../skills/skills.component';
import {ConsultationComponent} from '../consultation/consultation.component';
import {NewsletterComponent} from '../newsletter/newsletter.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'admin', component: AdminComponent, canActivate: [AdminGuardService],
        children: [
          { path: 'contacted', component: ContactedComponent, canActivate: [AdminGuardService] },
          { path: 'projects', component: ProjectsComponent, canActivate: [AdminGuardService],
            children: [
              { path: 'create-project', component: CreateProjectComponent },
              { path: 'list-projects', component: ListProjectComponent }
            ]
          },
          { path: 'skills', component: SkillsComponent, canActivate: [AdminGuardService] },
          { path: 'consultation', component: ConsultationComponent, canActivate: [AdminGuardService] },
          { path: 'newsletter', component: NewsletterComponent, canActivate: [AdminGuardService] }
        ],
      },
    ])
  ],
  declarations: []
})
export class AdminRoutingModule { }
