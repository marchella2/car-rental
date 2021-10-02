import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { DashboardComponent } from './controller/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'vehicle', component: VehicleListComponent},
  {path: 'driver', component: DriverListComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'transaction', component: TransactionListComponent},
  {path: 'addVehicle', component: VehicleCreateComponent},
  {path: 'addDriver', component: DriverCreateComponent},
  {path: 'addCustomer', component:CustomerCreateComponent},
  {path: 'addTransaction', component: TransactionCreateComponent},
  {path: 'updateVehicle/:id', component: VehicleUpdateComponent},
  {path: 'detailVehicle/:id', component: VehicleDetailComponent},
  {path: 'updateDriver/:id', component: DriverUpdateComponent},
  {path: 'detailDriver/:id', component: DriverDetailComponent},
  {path: 'updateCustomer/:id', component:CustomerUpdateComponent},
  {path: 'detailCustomer/:id', component: CustomerDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
