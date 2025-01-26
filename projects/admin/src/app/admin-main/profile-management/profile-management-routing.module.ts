import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilemanagementComponent } from './profilemanagement/profilemanagement.component';
const routes: Routes = [
  {
    path:'',
    component:ProfilemanagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileManagementRoutingModule { }
