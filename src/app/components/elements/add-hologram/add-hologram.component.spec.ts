import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHologramComponent } from './add-hologram.component';

describe('AddHologramComponent', () => {
  let component: AddHologramComponent;
  let fixture: ComponentFixture<AddHologramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHologramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHologramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
