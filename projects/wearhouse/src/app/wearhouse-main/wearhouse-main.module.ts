import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WearhouseMainRoutingModule } from './wearhouse-main-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    WearhouseMainRoutingModule
  ]
})
export class WearhouseMainModule { }
