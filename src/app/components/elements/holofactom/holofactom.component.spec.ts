import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolofactomComponent } from './holofactom.component';

describe('HolofactomComponent', () => {
  let component: HolofactomComponent;
  let fixture: ComponentFixture<HolofactomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolofactomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolofactomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
