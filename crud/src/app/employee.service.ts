import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http:HttpClient) {}

  addEmployee(employee:any){
    return this.http.post("http://localhost:3000/endpoint/add-employee",employee)
  }

  listEmployee(){
    return this.http.get("http://localhost:3000/endpoint/")
 }

 deleteEmployee(id:any){
  return this.http.delete("http://localhost:3000/endpoint/del-employee/"+id)
 }

 singleEmployee(id:any){
  return this.http.get("http://localhost:3000/endpoint/employee/"+id)
 }

 updateEmployee(id:any,employee:any){
  return this.http.put("http://localhost:3000/endpoint/update-employee/"+id,employee)
 }
}