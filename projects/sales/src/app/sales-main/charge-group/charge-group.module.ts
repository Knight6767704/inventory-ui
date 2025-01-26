import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChargeGroupRoutingModule } from './charge-group-routing.module';
import { ChargegroupComponent } from './chargegroup/chargegroup.component';


@NgModule({
  declarations: [
    ChargegroupComponent
  ],
  imports: [
    CommonModule,
    ChargeGroupRoutingModule
  ]
})
export class ChargeGroupModule { }
