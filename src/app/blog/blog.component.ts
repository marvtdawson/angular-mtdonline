import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
  // styleUrls: ['../../../sass/main.scss']
})
export class BlogComponent implements OnInit {

  prePageTitle = 'Blah Blah Blah';
  pageTitle = 'BLOG!';


  constructor() { }

  ngOnInit() {
  }

}
