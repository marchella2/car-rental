import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';
import { VehicleUpdateComponent } from './vehicle-update/vehicle-update.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { DriverCreateComponent } from './driver-create/driver-create.component';
import { DriverUpdateComponent } from './driver-update/driver-update.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

const routes: Routes = [
  {path:'', redirectTo: 'vehicle', pathMatch: 'full'},
  {path: 'vehicle', component: VehicleListComponent},
  {path: 'driver', component: DriverListComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'addVehicle', component: VehicleCreateComponent},
  {path: 'addDriver', component: DriverCreateComponent},
  {path: 'addCustomer', component:CustomerCreateComponent},
  {path: 'updateVehicle/:id', component: VehicleUpdateComponent},
  {path: 'detailVehicle/:id', component: VehicleDetailComponent},
  {path: 'updateDriver/:id', component: DriverUpdateComponent},
  {path: 'detailDriver/:id', component: DriverDetailComponent},
  {path: 'updateCustomer/:id', component:CustomerUpdateComponent},
  {path: 'detailCustomer/:id', component: CustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
