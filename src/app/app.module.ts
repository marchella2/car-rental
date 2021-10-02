import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './controller/dashboard/dashboard.component';
import { VehicleCreateComponent } from './controller/vehicle-create/vehicle-create.component';
import { VehicleUpdateComponent } from './controller/vehicle-update/vehicle-update.component';
import { VehicleListComponent } from './controller/vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './controller/vehicle-detail/vehicle-detail.component';
import { DriverCreateComponent } from './controller/driver-create/driver-create.component';
import { DriverUpdateComponent } from './controller/driver-update/driver-update.component';
import { DriverDetailComponent } from './controller/driver-detail/driver-detail.component';
import { DriverListComponent } from './controller/driver-list/driver-list.component';
import { CustomerDetailComponent } from './controller/customer-detail/customer-detail.component';
import { CustomerListComponent } from './controller/customer-list/customer-list.component';
import { CustomerCreateComponent } from './controller/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './controller/customer-update/customer-update.component';
import { TransactionCreateComponent } from './controller/transaction-create/transaction-create.component';
import { TransactionListComponent } from './controller/transaction-list/transaction-list.component';


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
    CustomerDetailComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    DashboardComponent,
    TransactionCreateComponent,
    TransactionListComponent,
   
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
