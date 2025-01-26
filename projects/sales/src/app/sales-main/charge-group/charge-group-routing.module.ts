import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargegroupComponent } from './chargegroup/chargegroup.component';
const routes: Routes = [
  {
    path:'',
    component:ChargegroupComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChargeGroupRoutingModule { }
