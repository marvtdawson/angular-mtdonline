import { TestBed, inject } from '@angular/core/testing';

import { FrameworksService } from './frameworks.service';

describe('FrameworksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrameworksService]
    });
  });

  it('should be created', inject([FrameworksService], (service: FrameworksService) => {
    expect(service).toBeTruthy();
  }));
});
