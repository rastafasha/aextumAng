import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmsistemasComponent } from './admsistemas.component';

describe('AdmsistemasComponent', () => {
  let component: AdmsistemasComponent;
  let fixture: ComponentFixture<AdmsistemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmsistemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmsistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
