import { TestBed, inject } from '@angular/core/testing';

import { ExternalRoutesService } from './external-routes.service';

describe('ExternalRoutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExternalRoutesService]
    });
  });

  it('should be created', inject([ExternalRoutesService], (service: ExternalRoutesService) => {
    expect(service).toBeTruthy();
  }));
});
