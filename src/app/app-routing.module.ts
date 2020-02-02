import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutSiteComponent } from './about-site/about-site.component';
import { ResumeComponent } from './resume/resume.component';
import { ConsultingComponent} from './consulting/consulting.component';
import { LoginComponent } from './admin/login/login.component';
import { BlogComponent } from './blog/blog.component';
import { SignupComponent} from './admin/signup/signup.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-site', component: AboutSiteComponent },
  { path: 'consulting', component: ConsultingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sign-up', component: SignupComponent },
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
