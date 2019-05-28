import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game3d2048Component } from './game3d2048.component';

describe('Game3d2048Component', () => {
  let component: Game3d2048Component;
  let fixture: ComponentFixture<Game3d2048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game3d2048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game3d2048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
