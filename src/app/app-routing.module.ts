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
import { LoginComponent } from './controller/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  {path: 'vehicle', component: VehicleListComponent, canActivate: [AuthGuard]},
  {path: 'driver', component: DriverListComponent, canActivate: [AuthGuard]},
  {path: 'customer', component: CustomerListComponent, canActivate: [AuthGuard]},
  {path: 'transaction', component: TransactionListComponent, canActivate: [AuthGuard]},
  {path: 'addVehicle', component: VehicleCreateComponent, canActivate: [AuthGuard]},
  {path: 'addDriver', component: DriverCreateComponent, canActivate: [AuthGuard]},
  {path: 'addCustomer', component:CustomerCreateComponent, canActivate: [AuthGuard]},
  {path: 'addTransaction', component: TransactionCreateComponent, canActivate: [AuthGuard]},
  {path: 'updateVehicle/:id', component: VehicleUpdateComponent, canActivate: [AuthGuard]},
  {path: 'detailVehicle/:id', component: VehicleDetailComponent, canActivate: [AuthGuard]},
  {path: 'updateDriver/:id', component: DriverUpdateComponent, canActivate: [AuthGuard]},
  {path: 'detailDriver/:id', component: DriverDetailComponent, canActivate: [AuthGuard]},
  {path: 'updateCustomer/:id', component:CustomerUpdateComponent, canActivate: [AuthGuard]},
  {path: 'detailCustomer/:id', component: CustomerDetailComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
