import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/entity/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit {

  id: String;
  driver: Driver;

  constructor(private route: ActivatedRoute, private router: Router, private driverService: DriverService) { }

  back()
  {
    this.router.navigate(['driver']);
  }

  ngOnInit() {
    this.driver = new Driver();

    this.id = this.route.snapshot.params['id'];

    this.driverService.findDriver(this.id).subscribe(
      data=>{console.log(data);
        this.driver = data;
      }, error=>console.log(error)
    );
  }

}
