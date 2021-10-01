import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/entity/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {
  
  vhc : Vehicle = new Vehicle();
  diSubmit = true;

  constructor(private vs : VehicleService, private router : Router) { }

  ngOnInit() {
  }


  back(){
    this.router.navigate(['vehicle']);
  }

  save(){
    if(this.vhc.vhcName == null || this.vhc.vhcName == ""){
      alert("Nama tidak boleh kosong");
    } else if(this.vhc.vhcNumber == null) {
      alert("Nomor kendaraan harus diisi");
    } else if(this.vhc.vhcModel == null || this.vhc.vhcModel == "") {
      alert("Model kendaraan tidak boleh kosong");
    } else if(this.vhc.vhcPrice == null || this.vhc.vhcPrice == "") {
      alert("Harga kendaraan harus diisi");
    } else {
      this.vs.createVehicle(this.vhc).subscribe(
        data=>{
          console.log(data);
          this.back()
        }, error=> console.log(error)
      );
    }
  }

  submit(){
    this.diSubmit = true;
    this.save()
  }
}
