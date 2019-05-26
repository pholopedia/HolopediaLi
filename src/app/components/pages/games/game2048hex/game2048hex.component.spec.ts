import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game2048hexComponent } from './game2048hex.component';

describe('Game2048hexComponent', () => {
  let component: Game2048hexComponent;
  let fixture: ComponentFixture<Game2048hexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game2048hexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game2048hexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
