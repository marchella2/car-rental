import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from 'src/app/entity/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-create',
  templateUrl: './driver-create.component.html',
  styleUrls: ['./driver-create.component.css']
})
export class DriverCreateComponent implements OnInit {

  driver : Driver = new Driver();

  constructor(private ds : DriverService, private router : Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['driver']);
  }

 save(){
  if (this.driver.nik == null){
    alert("NIK harus diisi");
  } else if (isNaN(this.driver.nik)){
    alert("NIK harus diisi dengan angka");
  } else if (this.driver.driverName == null || this.driver.driverName==""){
    alert("Nama harus diisi");
  } else if (this.driver.driverPhone == null || this.driver.driverPhone==""){
    alert("Nomor telepon harus diisi");
  } else {
    this.ds.createDriver(this.driver).subscribe(
      data=>{
        console.log(data);
        this.back()
      }, error=> console.log(error)
    );
  }
 }

  submit(){
    this.save()
  }

}
