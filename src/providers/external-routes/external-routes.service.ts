import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalRoutesService {

  constructor() { }


  goToBurginConstruction() {
    window.location.href = 'https://www.burginconstructionmn.com';
  }

  goToMtdOnline() {
    window.location.href = 'https://mtdonline.net';
  }

  /*goToReggiesBucket() {
    window.location.href = 'https://www.reggiesbucket.com/home';
  }*/

  goToWhosLaundry() {
    window.location.href = 'https://www.whoslaundry.com';
  }
  goToMattressAndThings() {
    window.location.href = 'https://www.mattressandthings.com';
  }
}
