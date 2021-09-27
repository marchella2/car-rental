import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  drivers: Observable<Driver[]>;

  constructor(private driverService: DriverService, private router: Router) { }

  reload()
  {
    this.drivers = this.driverService.getDriverList();
  }

  goToCreate(){
    this.router.navigate(['addDriver']);
  }


  goToDetail(id: String)
  {
    this.router.navigate(['detailDriver', id]);
  }

  goToUpdate(id: String)
  {
    this.router.navigate(['updateDriver', id]);
  }

  deleteDriver(id: String)
  {
    this.driverService.deleteDriver(id).subscribe(
      data=>{
        console.log(data);
        this.reload();
      },
      error=> console.log(error)
    );
  }

  ngOnInit() {
    this.reload();
  }

}
