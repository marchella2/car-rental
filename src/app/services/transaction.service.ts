import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../entity/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:8080';  
  constructor(private http: HttpClient) { }

  getTransaction():Observable<any>{
    return this.http.get(`${this.baseUrl}/transaction/get`);
  }

  getVehicle():Observable<any>{
    return this.http.get(`${this.baseUrl}/transaction/getvehicle`);
  }

  getDriver():Observable<any>{
    return this.http.get(`${this.baseUrl}/transaction/getdriver`);
  }

  createTransaction(transaction: Transaction):Observable<any>{
    return this. http.post(`${this.baseUrl}/transaction/create`, transaction);
  }

  finishTransaction(id:String):Observable<any>{
    return this.http.get(`${this.baseUrl}/transaction/finish/${id}`);
  }
}
