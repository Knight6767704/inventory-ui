import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdjustmentsRoutingModule } from './adjustments-routing.module';
import { AdjustmentComponent } from './adjustment/adjustment.component';
import { CountComponent } from './count/count.component';


@NgModule({
  declarations: [
    AdjustmentComponent,
    CountComponent
  ],
  imports: [
    CommonModule,
    AdjustmentsRoutingModule
  ]
})
export class AdjustmentsModule { }
