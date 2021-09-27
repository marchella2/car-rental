import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles : Observable<Vehicle[]>;

  constructor(private vehicleService: VehicleService, private router : Router) { }

  reloadData()
  {
    this.vehicles = this.vehicleService.getVehicleList();
  }


  goToCreate(){
    this.router.navigate(['addVehicle']);
  }

  goToDetail(id: String)
  {
    this.router.navigate(['detailVehicle', id]);
  }

  goToUpdate(id: String)
  {
    this.router.navigate(['updateVehicle', id]);
  }

  deleteVehicle(id: String)
  {
    this.vehicleService.deleteVehicle(id).subscribe(
      data=>{
        console.log(data);
        this.reloadData();
      },
      error=> console.log(error)
    );
  }

  ngOnInit() {
    this.reloadData();
  }

}
