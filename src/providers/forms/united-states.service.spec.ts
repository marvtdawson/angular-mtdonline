import { TestBed, inject } from '@angular/core/testing';

import { UnitedStatesService } from './united-states.service';

describe('UnitedStatesServiceList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitedStatesService]
    });
  });

  // @ts-ignore
  it('should be created', inject([UnitedStatesService], (service: UnitedStatesService) => {
    expect(service).toBeTruthy();
  }));
});
