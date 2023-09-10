import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAndExamComponent } from './question-and-exam.component';

describe('QuestionAndExamComponent', () => {
  let component: QuestionAndExamComponent;
  let fixture: ComponentFixture<QuestionAndExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionAndExamComponent]
    });
    fixture = TestBed.createComponent(QuestionAndExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
