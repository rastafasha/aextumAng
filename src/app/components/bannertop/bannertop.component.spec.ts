import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannertopComponent } from './bannertop.component';

describe('BannertopComponent', () => {
  let component: BannertopComponent;
  let fixture: ComponentFixture<BannertopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannertopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannertopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
