import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee = new Employee()

  constructor(private employeeService: EmployeeService, private activRoute: ActivatedRoute) { }

  id: number

  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id']
    this.getEmployee()
  }

  getEmployee() {
    this.employeeService.getSingleEmployee(this.id).subscribe(response => {
      //now assign the REST API response for the employee object
      this.employee = response
      //console.log(response)
    })
  }

}
