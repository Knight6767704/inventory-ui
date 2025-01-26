import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMainRoutingModule } from './admin-main-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    AdminMainRoutingModule
  ]
})
export class AdminMainModule { }
