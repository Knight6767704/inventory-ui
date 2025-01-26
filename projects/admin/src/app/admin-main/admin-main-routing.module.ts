import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'userManagement',
        loadChildren:()=>import('./user-management/user-management.module').then((m)=>m.UserManagementModule)
      },
      {
        path:'profileManagement',
        loadChildren:()=>import('./profile-management/profile-management.module').then((m)=>m.ProfileManagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMainRoutingModule { }
