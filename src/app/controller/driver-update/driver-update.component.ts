import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/entity/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-update',
  templateUrl: './driver-update.component.html',
  styleUrls: ['./driver-update.component.css']
})
export class DriverUpdateComponent implements OnInit {

  driver: Driver;
  id: String;

  constructor(private route: ActivatedRoute, private router: Router, private ds : DriverService) { }

  back(){
    this.router.navigate(['driver']);
  }

  updateDriver(){
    if (this.driver.nik == null){
      alert("NIK harus diisi");
    } else if (isNaN(this.driver.nik)){
      alert("NIK harus diisi dengan angka");
    } else if (this.driver.driverName == null || this.driver.driverName==""){
      alert("Nama harus diisi");
    } else if (this.driver.driverPhone == null || this.driver.driverPhone==""){
      alert("Nomor telepon harus diisi");
    } else {
      this.ds.updateDriver(this.driver).subscribe(
        data=>{
          console.log(data);
          this.back();
        }, error=>console.log(error)
      );
    }
  }

  submit(){
    this.updateDriver();
  }


  ngOnInit() {
    this.driver = new Driver();

    this.id = this.route.snapshot.params['id'];

    this.ds.findDriver(this.id).subscribe(
      data=>{console.log(data);
        this.driver=data;
      }, error=>console.log(error)
    );
  }
}
