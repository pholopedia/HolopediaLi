import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HologramsListComponent } from './holograms-list.component';

describe('HologramsListComponent', () => {
  let component: HologramsListComponent;
  let fixture: ComponentFixture<HologramsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HologramsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HologramsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
