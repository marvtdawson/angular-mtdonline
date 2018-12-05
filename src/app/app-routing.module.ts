import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AboutSiteComponent } from './about-site/about-site.component';
import { ExperienceComponent } from './experience/experience.component';
import { StacksComponent } from './stacks/stacks.component';
import { ResumeComponent } from './resume/resume.component';
import { ConsultingComponent} from './consulting/consulting.component';
import { LoginComponent } from './admin/login/login.component';
import { BlogComponent } from './blog/blog.component';
import { SignupComponent} from './admin/signup/signup.component';

import { PortfolioRoutingModule } from './portfolio/portfolio-routing.module/portfolio-routing.module';
import { AdminRoutingModule } from './admin/admin-routing/admin-routing.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-site', component: AboutSiteComponent },
  { path: 'about', component: AboutComponent },
  { path: 'consulting', component: ConsultingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'stacks', component: StacksComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
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
