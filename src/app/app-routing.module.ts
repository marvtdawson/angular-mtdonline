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
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { StacksComponent } from './stacks/stacks.component';
import { ResumeComponent } from './resume/resume.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactComponent } from './portfolio/react/react.component';
import { WixComponent } from './portfolio/wix/wix.component';
import { ConsultingComponent} from './consulting/consulting.component';
import { LoginComponent } from './login/login.component';


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
  {path: 'skills', component: SkillsComponent },
  {path: 'stacks', component: StacksComponent },
  {path: 'resume', component: ResumeComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'login', component: LoginComponent },
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
