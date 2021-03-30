import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees"
  private singleEmpURL = "http://localhost:8080/api/v1/employee"

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`)
  }

  createEmployee(employee: Employee): Observable<Object> {
    // pass Object or any type if we don't know the response of the Rest API
    return this.httpClient.post(`${this.baseURL}`, employee)
  }

  getSingleEmployee(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.singleEmpURL}/${id}`)
  }

  updateEmployee(id:number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.singleEmpURL}/${id}`, employee)
  }

}
