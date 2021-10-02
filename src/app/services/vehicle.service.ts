import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/entity/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getVehicleList():Observable<any>{
    return this.http.get(`${this.baseUrl}/vehicle/get`);
  }

  createVehicle(vehicle: Vehicle):Observable<any> {
    return this.http.post(`${this.baseUrl}/vehicle/create`, vehicle);
  }

  updateVehicle(vehicle: Vehicle):Observable<any> {
    return this.http.put(`${this.baseUrl}/vehicle/update`, vehicle);
  }

  deleteVehicle(id: String):Observable<any> {
    return this.http.delete(`${this.baseUrl}/vehicle/delete/${id}`);
  }

  findVehicle(id: String):Observable<any>{
    return this.http.get(`${this.baseUrl}/vehicle/find/${id}`);
  }

}
