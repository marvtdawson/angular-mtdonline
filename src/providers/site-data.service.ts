import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {

  siteName = 'Marvin T. Dawson';
  siteKeywords = 'Web Developer, Webmaster, Full Stack, Developer, Software, Engineer, Software Engineer, Angular 6, Angular, ' +
    'TypeScript, Ionic Framework, Javascript, PHP, MongoDb, ExpressJs, ReactJS, NodeJS, AWS, Amazon Web Services, NoSQL, MySQL';

  constructor() { }
}
