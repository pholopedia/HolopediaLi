import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincessesComponent } from './princesses.component';

describe('PrincessesComponent', () => {
  let component: PrincessesComponent;
  let fixture: ComponentFixture<PrincessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
