import { Component, OnInit } from '@angular/core';


const ARTICLES = [
  {
    '_id': 1,
    'title': 'Learning To Code: The Basic Part 1 HTML'
  },
  {
    '_id': 2,
    'title': 'Learning To Code: The Basic Part 2 CSS'
  },
  {
    '_id': 3,
    'title': 'Learning To Code: The Basic Part 3 JavaScript'
  },

];

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
  // styleUrls: ['../../../sass/main.scss']
})

export class BlogComponent implements OnInit {

  prePageTitle = 'Blah Blah Blah';
  pageTitle = 'BLOG!';
  headerImage = '../../../assets/img/ionic_and_angular.png';
  headerImageAlt = 'Marvin\'s Media Blog';
  articles = ARTICLES;


  constructor() { }

  ngOnInit() {
  }

}
