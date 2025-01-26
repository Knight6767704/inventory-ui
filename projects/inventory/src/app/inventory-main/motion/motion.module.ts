import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotionRoutingModule } from './motion-routing.module';
import { MoveComponent } from './move/move.component';
import { TransferComponent } from './transfer/transfer.component';
import { HoldComponent } from './hold/hold.component';


@NgModule({
  declarations: [
    MoveComponent,
    TransferComponent,
    HoldComponent
  ],
  imports: [
    CommonModule,
    MotionRoutingModule
  ]
})
export class MotionModule { }
