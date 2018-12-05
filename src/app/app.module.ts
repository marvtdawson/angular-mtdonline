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
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { TranslateModule } from '@ngx-translate/core';
// import { FirebaseListObservable } from 'angularfire2/database';

// services
import { AdminService} from './admin/admin.service';
import { AdminGuardService} from '../providers/admin-guard/admin-guard.service';
import { FrameworksService } from '../providers/frameworks/frameworks.service';
import { UserService } from '../providers/user/user.service';
import { ExternalRoutesService } from '../providers/external-routes/external-routes.service';

// app and layout components
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BsNavbarComponent } from './layout/bs-navbar/bs-navbar.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppTitleComponent } from './layout/app-title/app-title.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// core components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutSiteComponent } from './about-site/about-site.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { StacksComponent } from './stacks/stacks.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

// portfolio components
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AngularComponent } from './portfolio/angular/angular.component';
import { AngularIonicComponent } from './portfolio/angular-ionic/angular-ionic.component';
import { PhpComponent } from './portfolio/php/php.component';
import { ReactComponent } from './portfolio/react/react.component';
import { AngularCAspnetComponent } from './portfolio/angular-c-aspnet/angular-c-aspnet.component';
import { WixComponent } from './portfolio/wix/wix.component';

// admin components
import { AdminComponent } from './admin/admin.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { ProjectsModule } from './admin/projects/projects.module';
import { SkillsComponent } from './admin/skills/skills.component';
import { LoginComponent } from './admin/login/login.component';
import { ConsultationComponent } from './admin/consultation/consultation.component';
import { ContactedComponent } from './admin/contacted/contacted.component';
import { NewsletterComponent } from './admin/newsletter/newsletter.component';

// modal and dialog components
import { ResumeComponent } from './resume/resume.component';
import { RequestQuoteComponent } from './consulting/request-quote/request-quote.component';
import { RecentProjectsComponent } from './recent-projects/recent-projects.component';
// import {NgbDropdownMenu} from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
import { SignupComponent } from './admin/signup/signup.component';
import { HighlightDirective } from '../directives/highlight/highlight.directive';
import { PortfolioRoutingModule } from './portfolio/portfolio-routing.module/portfolio-routing.module';
import { AdminRoutingModule } from './admin/admin-routing/admin-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    AppTitleComponent,
    AppFooterComponent,
    HomeComponent,
    AboutComponent,
    AboutSiteComponent,
    ContactComponent,
    StacksComponent,
    ExperienceComponent,
    ResumeComponent,
    PortfolioComponent,
    PhpComponent,
    AngularComponent,
    AngularIonicComponent,
    AngularCAspnetComponent,
    ReactComponent,
    WixComponent,
    PageNotFoundComponent,
    SkillsComponent,
    RecentProjectsComponent,
    ConsultingComponent,
    LoginComponent,
    ProjectsComponent,
    ConsultationComponent,
    ContactedComponent,
    NewsletterComponent,
    AdminComponent,
    RequestQuoteComponent,
    BlogComponent,
    SignupComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    LayoutModule,
    AngularMaterialModule,
    ProjectsModule,
    ScrollToModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    TranslateModule.forRoot(),
    PortfolioRoutingModule,
    AdminRoutingModule,
    AppRoutingModule,
  ],
  providers: [AdminService, AdminGuardService, FrameworksService, UserService, ExternalRoutesService ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [
    RecentProjectsComponent,
    ResumeComponent,
    RequestQuoteComponent
  ]
})
export class AppModule { }
