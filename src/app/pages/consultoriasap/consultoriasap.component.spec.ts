import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoriasapComponent } from './consultoriasap.component';

describe('ConsultoriasapComponent', () => {
  let component: ConsultoriasapComponent;
  let fixture: ComponentFixture<ConsultoriasapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultoriasapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultoriasapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
