import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuatationsRoutingModule } from './quatations-routing.module';
import { QuatationComponent } from './quatation/quatation.component';


@NgModule({
  declarations: [
    QuatationComponent
  ],
  imports: [
    CommonModule,
    QuatationsRoutingModule
  ]
})
export class QuatationsModule { }
