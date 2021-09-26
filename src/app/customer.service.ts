import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

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

}
