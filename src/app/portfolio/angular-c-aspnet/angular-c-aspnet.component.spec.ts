import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCAspnetComponent } from './angular-c-aspnet.component';

describe('AngularCAspnetComponent', () => {
  let component: AngularCAspnetComponent;
  let fixture: ComponentFixture<AngularCAspnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCAspnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCAspnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
