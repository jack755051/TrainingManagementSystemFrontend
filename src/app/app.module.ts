import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 引入這個
import { RouterModule } from '@angular/router';

//page
import { EmployeeComponent } from './pages/employee/employee.component';
import { ClassroomCoursesComponent } from './pages/classroom-courses/classroom-courses.component';
import { DigitalLearningComponent } from './pages/digital-learning/digital-learning.component';
import { TrainingResumeComponent } from './pages/training-resume/training-resume.component';
import { QuestionAndExamComponent } from './pages/question-and-exam/question-and-exam.component';
import { LayoutRootComponent } from './components/layout-root/layout-root.component';

//Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LayoutRootComponent,
    ClassroomCoursesComponent,
    DigitalLearningComponent,
    TrainingResumeComponent,
    QuestionAndExamComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
