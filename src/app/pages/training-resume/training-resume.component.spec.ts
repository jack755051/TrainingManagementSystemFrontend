import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingResumeComponent } from './training-resume.component';

describe('TrainingResumeComponent', () => {
  let component: TrainingResumeComponent;
  let fixture: ComponentFixture<TrainingResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingResumeComponent]
    });
    fixture = TestBed.createComponent(TrainingResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
