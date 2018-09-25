import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../providers/site-data.service';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.css']
})
export class ConsultingComponent implements OnInit {

  constructor(private siteData: SiteDataService) { }

  pageTitle = 'Consulting';
  siteName = this.siteData.siteName;

  ngOnInit() {
  }

}
