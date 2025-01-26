import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChargeCodeRoutingModule } from './charge-code-routing.module';
import { ChargecodeComponent } from './chargecode/chargecode.component';


@NgModule({
  declarations: [
    ChargecodeComponent
  ],
  imports: [
    CommonModule,
    ChargeCodeRoutingModule
  ]
})
export class ChargeCodeModule { }
