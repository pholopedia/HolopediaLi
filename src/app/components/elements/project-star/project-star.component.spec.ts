import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStarComponent } from './project-star.component';

describe('ProjectStarComponent', () => {
  let component: ProjectStarComponent;
  let fixture: ComponentFixture<ProjectStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
