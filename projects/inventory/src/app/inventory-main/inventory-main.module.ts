import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryMainRoutingModule } from './inventory-main-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    InventoryMainRoutingModule
  ]
})
export class InventoryMainModule { }
