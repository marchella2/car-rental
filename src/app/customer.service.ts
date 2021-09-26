<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
=======
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
>>>>>>> 3c256674d73e48cf8b1d3b622258e4464c8bc556
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

<<<<<<< HEAD
  private baseUrl = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  getCustomerList():Observable<any>{
    return this.http.get(`${this.baseUrl}/customer/get`);
  }

  createCustomer(customer: Customer):Observable<any> {
    return this.http.post(`${this.baseUrl}/customer/create`, customer);
  }

  updateCustomer(customer: Customer):Observable<any> {
    return this.http.put(`${this.baseUrl}/customer/update`, customer);
  }

  deleteCustomer(id: String):Observable<any> {
    return this.http.delete(`${this.baseUrl}/customer/delete/${id}`);
  }

  findCustomer(id: String):Observable<any>{
    return this.http.get(`${this.baseUrl}/customer/find/${id}`);
  }
=======
  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }


  createCustomer(customer: Customer): Observable<any>{
    return this.http.post(`${this.baseUrl}/customer/create`, customer);
  }

  updateCustomer(customer: Customer): Observable<any>{
    return this.http.put(`${this.baseUrl}/customer/create`, customer);
  }

  findCustomer(id: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/create/{id}`);
  }

>>>>>>> 3c256674d73e48cf8b1d3b622258e4464c8bc556
}
