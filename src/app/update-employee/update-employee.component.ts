import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee()

  constructor(private employeeService: EmployeeService, private activRoute: ActivatedRoute, private router: Router) { }

  id: number

  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id']

    this.getSingleEmployee(this.id)
    //OR
    /* 
    this.employeeService.getSingleEmployee(this.id).subscribe(response => {
      console.log(response)
      this.employee = response
    }, error => console.log(error));
     */
  }

  getSingleEmployee(id: number) {
    this.employeeService.getSingleEmployee(id).subscribe(data => {
      this.employee = data
      console.log(data)
    }, error => console.log(error))
  }

  submitUpdateEmpl() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( response => {
      return this.router.navigate(['/employees'])
    })
  }
  
}
