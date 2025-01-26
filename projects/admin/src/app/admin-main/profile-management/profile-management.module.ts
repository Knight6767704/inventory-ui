import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileManagementRoutingModule } from './profile-management-routing.module';
import { ProfilemanagementComponent } from './profilemanagement/profilemanagement.component';


@NgModule({
  declarations: [
    ProfilemanagementComponent
  ],
  imports: [
    CommonModule,
    ProfileManagementRoutingModule
  ]
})
export class ProfileManagementModule { }
