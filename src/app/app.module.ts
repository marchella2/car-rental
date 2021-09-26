import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';
import { VehicleUpdateComponent } from './vehicle-update/vehicle-update.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DriverCreateComponent } from './driver-create/driver-create.component';
import { DriverUpdateComponent } from './driver-update/driver-update.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { DriverListComponent } from './driver-list/driver-list.component';
<<<<<<< HEAD
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
=======
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
>>>>>>> 3c256674d73e48cf8b1d3b622258e4464c8bc556

@NgModule({
  declarations: [
    AppComponent,
    VehicleCreateComponent,
    VehicleUpdateComponent,
    VehicleListComponent,
    VehicleDetailComponent,
    DriverCreateComponent,
    DriverUpdateComponent,
    DriverDetailComponent,
    DriverListComponent,
<<<<<<< HEAD
    CustomerDetailComponent
=======
    CustomerCreateComponent,
    CustomerUpdateComponent
>>>>>>> 3c256674d73e48cf8b1d3b622258e4464c8bc556
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
