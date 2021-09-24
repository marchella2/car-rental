import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';


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
    this.router.navigate(['update']);
  }

  updateDriver(){
    this.ds.updateDriver(this.driver).subscribe(
      data=>{
        console.log(data);
        this.back();
      }, error=>console.log(error)
    );
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
