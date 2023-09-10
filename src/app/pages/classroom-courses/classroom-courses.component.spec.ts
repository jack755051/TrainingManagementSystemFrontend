import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomCoursesComponent } from './classroom-courses.component';

describe('ClassroomCoursesComponent', () => {
  let component: ClassroomCoursesComponent;
  let fixture: ComponentFixture<ClassroomCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomCoursesComponent]
    });
    fixture = TestBed.createComponent(ClassroomCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
