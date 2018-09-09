import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToMtdOnline(){
    window.location.href = 'https://mtdonline.net';
  }

  goToReggiesBucket(){
    window.location.href = 'https://www.reggiesbucket.com/home';
  }

}
