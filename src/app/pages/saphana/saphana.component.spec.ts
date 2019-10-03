import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaphanaComponent } from './saphana.component';

describe('SaphanaComponent', () => {
  let component: SaphanaComponent;
  let fixture: ComponentFixture<SaphanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaphanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaphanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
