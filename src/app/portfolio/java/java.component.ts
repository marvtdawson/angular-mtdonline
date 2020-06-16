import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ProjectsInterface} from '../../admin/projects/projects-interface';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  projects$: Observable<ProjectsInterface[]>;
  constructor() { }

  ngOnInit() {
  }

}
