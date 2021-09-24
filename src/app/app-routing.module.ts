import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';
import { VehicleUpdateComponent } from './vehicle-update/vehicle-update.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { DriverCreateComponent } from './driver-create/driver-create.component';
import { DriverUpdateComponent } from './driver-update/driver-update.component';

const routes: Routes = [
  {path:'', redirectTo: 'vehicle', pathMatch: 'full'},
  {path: 'vehicle', component: VehicleListComponent},
  {path: 'add', component: VehicleCreateComponent}, 
  {path: 'addDriver', component: DriverCreateComponent},
  {path: 'updateDriver', component: DriverUpdateComponent},
  {path: 'update/:id', component: VehicleUpdateComponent},
  {path: 'detail/:id', component: VehicleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
