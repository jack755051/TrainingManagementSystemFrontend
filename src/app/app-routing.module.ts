import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomCoursesComponent } from './pages/classroom-courses/classroom-courses.component';
import { DigitalLearningComponent } from './pages/digital-learning/digital-learning.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { QuestionAndExamComponent } from './pages/question-and-exam/question-and-exam.component';
import { TrainingResumeComponent } from './pages/training-resume/training-resume.component';

export const routes: Routes = [
  { path: 'Employee', component: EmployeeComponent, title: '員工專區' },
  {
    path: 'classRoomCourse',
    component: ClassroomCoursesComponent,
    title: '班級課程專區',
  },
  {
    path: 'digitalLearning',
    component: DigitalLearningComponent,
    title: '數位學習專區',
  },
  {
    path: 'trainResume',
    component: TrainingResumeComponent,
    title: '訓練履歷',
  },
  {
    path: 'questionAndExam',
    component: QuestionAndExamComponent,
    title: '問卷與考試',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
