import { Component, OnInit } from '@angular/core';
import { learnData } from 'src/app/interface/interface';

const ResponseData: learnData = {
  jobName: 'JQCAJ-資訊工程師',
  InProgressAndDone: 0,
  OngoingCourses: 1,
  CompletedCourses: 0,
  TotalCourses: 4,
  PassRate: '0%',
};

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  learnData: learnData = ResponseData;
  constructor() {}

  ngOnInit(): void {
    console.warn(this.learnData);
  }
}
