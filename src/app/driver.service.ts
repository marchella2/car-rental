import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private baseUrl = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  getDriverList():Observable<any>{
    return this.http.get(`${this.baseUrl}/driver/get`);
  }

  createDriver(driver: Driver):Observable<any> {
    return this.http.post(`${this.baseUrl}/driver/create`, driver);
  }

  updateDriver(driver: Driver):Observable<any> {
    return this.http.put(`${this.baseUrl}/driver/update`, driver);
  }

  deleteDriver(id: String):Observable<any> {
    return this.http.delete(`${this.baseUrl}/driver/delete/${id}`);
  }

  findDriver(id: String):Observable<any>{
    return this.http.get(`${this.baseUrl}/driver/find/${id}`);
  }

}
