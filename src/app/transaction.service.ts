import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:8080';  
  constructor(private http: HttpClient) { }

  getTransaction():Observable<any>{
    return this.http.get(`${this.baseUrl}/transaction/show`);
  }

  getVehicle():Observable<any>{
    return this.http.get(`${this.baseUrl}/transaction/vhc`);
  }

  getDriver():Observable<any>{
    return this.http.get(`${this.baseUrl}/transaction/drv`);
  }

  createTransaction(transaction: Transaction):Observable<any>{
    return this. http.post(`${this.baseUrl}/transaction/save`, transaction);
  }

  finishTransaction(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/transaction/finish/${id}`);
  }
}
