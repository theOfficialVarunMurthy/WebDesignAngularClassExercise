import { Component } from '@angular/core';
import { Student } from './person/student';
@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Update Person';
  fullName = '';
  studentObj = new Student(100, 'Mahesh', 'Sharma');
  saveData(emp) {
    this.fullName = emp.fname + ' ' + emp.lname;
  }
}
