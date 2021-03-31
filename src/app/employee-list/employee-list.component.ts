import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[]

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {

    this.getEmployees()
    /* this.employees = [
      {
        id: 1,
        firstname:'EL HADJI',
        lastname:'NDIAYE',
        email:'admin@gmail.com',
      }
    ] */
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data
    })
  }

  public updateEmployee(id: number) {
    return this.router.navigate(['update-employee', id]);
  }

  public deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe( data => {
      this.getEmployees();
    })
  }

  public employeeDetails(id: number) {
    return this.router.navigate(['/employee-details', id])
  }

}
