import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';
import { VehicleUpdateComponent } from './vehicle-update/vehicle-update.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

const routes: Routes = [
  {path:'', redirectTo: 'vehicle', pathMatch: 'full'},
  {path: 'vehicle', component: VehicleListComponent},
  {path: 'add', component: VehicleCreateComponent},
  {path: 'update/:id', component: VehicleUpdateComponent},
  {path: 'detail/:id', component: VehicleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
