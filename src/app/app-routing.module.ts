import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { AngularComponent } from './portfolio/angular/angular.component';
import { AngularIonicComponent } from './portfolio/angular-ionic/angular-ionic.component';
import { AngularCAspnetComponent } from './portfolio/angular-c-aspnet/angular-c-aspnet.component';
import { PhpComponent } from './portfolio/php/php.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AboutSiteComponent } from './about-site/about-site.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './admin/skills/skills.component';
import { StacksComponent } from './stacks/stacks.component';
import { ResumeComponent } from './resume/resume.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactComponent } from './portfolio/react/react.component';
import { WixComponent } from './portfolio/wix/wix.component';
import { ConsultingComponent} from './consulting/consulting.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ContactedComponent } from './admin/contacted/contacted.component';
import { NewsletterComponent } from './admin/newsletter/newsletter.component';
import { ConsultationComponent } from './admin/consultation/consultation.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { CreateProjectComponent } from './admin/projects/create-project/create-project.component';
import { ListProjectComponent } from './admin/projects/list-project/list-project.component';
import { BlogComponent } from './blog/blog.component';
import { AdminGuardService} from '../providers/admin-guard/admin-guard.service';
import { SignupComponent} from './admin/signup/signup.component';


const appRoutes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'about-site', component: AboutSiteComponent },
  {path: 'about', component: AboutComponent },
  {path: 'consulting', component: ConsultingComponent },
  {path : 'blog', component: BlogComponent },
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
  {path: 'signup', component: SignupComponent },
  {path: 'login', component: LoginComponent },
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuardService],
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
