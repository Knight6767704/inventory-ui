import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesMainRoutingModule } from './sales-main-routing.module';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SalesMainRoutingModule
  ]
})
export class SalesMainModule { }
