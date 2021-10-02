import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/entity/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
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
}
