import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'chargecode',
        loadChildren:()=>import('./charge-code/charge-code.module').then((m)=>m.ChargeCodeModule)
      },
      {
        path:'chargegroup',
        loadChildren:()=>import('./charge-group/charge-group.module').then((m)=>m.ChargeGroupModule)
      },
      {
        path:'quatation',
        loadChildren:()=>import('./quatations/quatations.module').then((m)=>m.QuatationsModule)
      },
    ]
  }
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesMainRoutingModule { }
