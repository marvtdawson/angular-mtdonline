import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { AngularComponent } from './portfolio/angular/angular.component';
import { AngularIonicComponent } from './portfolio/angular-ionic/angular-ionic.component';
import { PhpComponent } from './portfolio/php/php.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { StacksComponent } from './stacks/stacks.component';
import { ResumeComponent } from './resume/resume.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'about', component: AboutComponent },
    {path: 'portfolio', component: PortfolioComponent },
    {path: 'portfolio/angular', component: AngularComponent },
    {path: 'portfolio/angular-ionic', component: AngularIonicComponent },
    {path: 'portfolio/php', component: PhpComponent },
    {path: 'experience', component: ExperienceComponent },
    {path: 'stacks', component: StacksComponent },
    {path: 'resume', component: ResumeComponent },
    {path: 'contact', component: ContactComponent },
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
