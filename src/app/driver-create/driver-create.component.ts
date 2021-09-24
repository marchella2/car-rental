import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';

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
   this.ds.createDriver(this.driver).subscribe(
     data=>{
       console.log(data);
       this.back()
     }, error=> console.log(error)
   );
 }

  submit(){
    this.save()
  }

}
