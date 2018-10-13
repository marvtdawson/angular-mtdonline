import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FIREBASE_CONFIG } from './app-firebase.config';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMaterialModule } from './angular-material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth-guard.service';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StacksComponent } from './stacks/stacks.component';
import { ExperienceComponent } from './experience/experience.component';
import { ResumeComponent } from './resume/resume.component';
import { BsNavbarComponent } from './layout/bs-navbar/bs-navbar.component';
import { PhpComponent } from './portfolio/php/php.component';
import { AngularComponent } from './portfolio/angular/angular.component';
import { AngularIonicComponent } from './portfolio/angular-ionic/angular-ionic.component';
import { AngularCAspnetComponent } from './portfolio/angular-c-aspnet/angular-c-aspnet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactComponent } from './portfolio/react/react.component';
import { WixComponent } from './portfolio/wix/wix.component';
import { SkillsComponent } from './auth/skills/skills.component';
import { RecentProjectsComponent } from './recent-projects/recent-projects.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { AppTitleComponent } from './layout/app-title/app-title.component';
import { LoginComponent } from './auth/login/login.component';
import { ProjectsComponent } from './auth/projects/projects.component';
import { ConsultationComponent } from './auth/consultation/consultation.component';
import { ContactedComponent } from './auth/contacted/contacted.component';
import { NewsletterComponent } from './auth/newsletter/newsletter.component';
import { AuthComponent } from './auth/auth.component';
import { ProjectsModule } from './auth/projects/projects.module';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    StacksComponent,
    ExperienceComponent,
    ResumeComponent,
    BsNavbarComponent,
    PhpComponent,
    AngularComponent,
    AngularIonicComponent,
    PageNotFoundComponent,
    AngularCAspnetComponent,
    ReactComponent,
    WixComponent,
    SkillsComponent,
    RecentProjectsComponent,
    ConsultingComponent,
    AppTitleComponent,
    LoginComponent,
    ProjectsComponent,
    ConsultationComponent,
    ContactedComponent,
    NewsletterComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    LayoutModule,
    AngularMaterialModule,
    ProjectsModule,
    ScrollToModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [
    RecentProjectsComponent,
    ResumeComponent
  ]
})
export class AppModule { }
