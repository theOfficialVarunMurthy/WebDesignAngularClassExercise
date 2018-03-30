import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from './student';
import { Employee } from './employee';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() student: Student;
  @Output() updateEmployee = new EventEmitter<Employee>();
  employee = new Employee();
  constructor() { }
  update() {
    this.employee.fname = this.student.fname;
    this.employee.lname = this.student.lname;

    this.updateEmployee.emit(this.employee);
  }

}
