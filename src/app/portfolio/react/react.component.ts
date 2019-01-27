import { Component, OnInit } from '@angular/core';
import { MTD_ONLINE } from '../../../../config/lib/global-const';
import {ExternalRoutesService} from '../../../providers/external-routes/external-routes.service';

const PROJS = [
  {
    '_id': 1,
    'title': 'MTD Online',
    'frameworks': 'REACT 16',
    'imagePath': '../../../assets/img/clients/mtdonline-react/mtdonline.jpg',
    'summary': 'My React 16 online portfolio.',
    'siteUrl': 'mtdOnline()'
  }
];

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss']
})
export class ReactComponent implements OnInit {

  prePageTitle = 'React 16';
  pageTitle = 'React 16';
  extRoute: any;
  headerImage = '../../../assets/img/site/2000px-React-icon.svg.png';
  headerImageAlt = 'React 16 Header Image';
  projects = PROJS;
  framework = 'REACT 16';

  constructor(private externalRoute: ExternalRoutesService) {
    this.extRoute = MTD_ONLINE;
  }

  ngOnInit() {
  }
  mtdOnline() {
    this.externalRoute.goToMtdOnline();
  }

}
