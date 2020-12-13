import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {

  siteName = 'Marvin T. Dawson';
  siteMotto = 'Developing';
  siteKeywords = 'Web Developer, Webmaster, Full Stack, Developer, Software, Engineer, Software Engineer, ' +
    'Angular 2, Angular 4, Angular 5, Angular 6, Angular 7, Angular, Angular Developer' +
    'TypeScript, Ionic Framework, Javascript, PHP, MongoDb, ExpressJs, ReactJS, C#' +
    'NodeJS, AWS, Amazon Web Services, NoSQL, MySQL, Google Cloud, Firebase, Firestore, Freelance';

  constructor() { }
}
