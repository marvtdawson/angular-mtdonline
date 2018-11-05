import { TestBed, inject } from '@angular/core/testing';

import { UnitedStatesServiceList } from './united-states.service';

describe('UnitedStatesServiceList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitedStatesServiceList]
    });
  });

  it('should be created', inject([UnitedStatesServiceList], (service: UnitedStatesServiceList) => {
    expect(service).toBeTruthy();
  }));
});
