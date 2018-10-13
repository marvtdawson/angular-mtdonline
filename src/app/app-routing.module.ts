import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth-guard.service';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { AngularComponent } from './portfolio/angular/angular.component';
import { AngularIonicComponent } from './portfolio/angular-ionic/angular-ionic.component';
import { AngularCAspnetComponent } from './portfolio/angular-c-aspnet/angular-c-aspnet.component';
import { PhpComponent } from './portfolio/php/php.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './auth/skills/skills.component';
import { StacksComponent } from './stacks/stacks.component';
import { ResumeComponent } from './resume/resume.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactComponent } from './portfolio/react/react.component';
import { WixComponent } from './portfolio/wix/wix.component';
import { ConsultingComponent} from './consulting/consulting.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { ContactedComponent } from './auth/contacted/contacted.component';
import { NewsletterComponent } from './auth/newsletter/newsletter.component';
import { ConsultationComponent } from './auth/consultation/consultation.component';
import { ProjectsComponent } from './auth/projects/projects.component';
import { CreateProjectComponent } from './auth/projects/create-project/create-project.component';
import { ListProjectComponent } from './auth/projects/list-project/list-project.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'consulting', component: ConsultingComponent },
  {path: 'portfolio', component: PortfolioComponent,
    children: [
      {path: 'angular', component: AngularComponent},
      {path: 'angular-ionic', component: AngularIonicComponent},
      {path: 'angular-c-aspnet', component: AngularCAspnetComponent},
      {path: 'react', component: ReactComponent},
      {path: 'php', component: PhpComponent},
      {path: 'wix', component: WixComponent}
    ],
  },
  {path: 'experience', component: ExperienceComponent },
  {path: 'stacks', component: StacksComponent },
  {path: 'resume', component: ResumeComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'login', component: LoginComponent },
  {path: 'auth', component: AuthComponent, canActivate: [AuthGuard],
    children: [
      { path: 'contacted', component: ContactedComponent },
      { path: 'projects', component: ProjectsComponent,
        children: [
          { path: 'create-project', component: CreateProjectComponent },
          { path: 'list-project', component: ListProjectComponent }
        ]
      },
      { path: 'skills', component: SkillsComponent },
      { path: 'consultation', component: ConsultationComponent },
      { path: 'newsletter', component: NewsletterComponent }
    ],
  },
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
