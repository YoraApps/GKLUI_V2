import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportationComponent } from './transportation.component';

import { LocationComponent } from './location/location.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { DriverMasterComponent } from './driver-master/driver-master.component';
import { RoutecreationComponent } from './routecreation/routecreation.component';
import { AssignRouteComponent } from "./assign-route/assign-route.component";

const routes: Routes = [{
  path: '',
  component: TransportationComponent,
  children: [{
    path: 'location',
    component: LocationComponent,
  }, {
    path: 'vehicle',
    component: VehicleComponent,
  }, {
    path: 'routecreation',
    component: RoutecreationComponent,
  },{
    path: 'assignroute',
    component: AssignRouteComponent,
  },
  {
    path: 'driver',
    component: DriverMasterComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class TransportationRoutingModule {

}

export const routedComponents = [
  TransportationComponent,
  LocationComponent,
  VehicleComponent,
  DriverMasterComponent,
  AssignRouteComponent,
];
