import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/entity/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-update',
  templateUrl: './vehicle-update.component.html',
  styleUrls: ['./vehicle-update.component.css']
})
export class VehicleUpdateComponent implements OnInit {

  id: String;
  vehicle: Vehicle;

  constructor(private route: ActivatedRoute, private router: Router, private vehicleService: VehicleService) { }

  back()
  {
    this.router.navigate(['vehicle']);
  }

  updateVehicle()
  {
    this.vehicleService.updateVehicle(this.vehicle).subscribe(
      data=>{
        console.log(data);
        this.back();
      }, error=>console.log(error)
    );
  }

  submit(){
    this.updateVehicle();
  }

  ngOnInit() {
    this.vehicle = new Vehicle();

    this.id = this.route.snapshot.params['id'];

    this.vehicleService.findVehicle(this.id).subscribe(
      data=>{console.log(data);
        this.vehicle=data;
      }, error=>console.log(error)
    );
  }


}
