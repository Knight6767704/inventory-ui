import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'motion',
        loadChildren:()=>import('./motion/motion.module').then((m)=>m.MotionModule)
      },
      {
        path:'adjustments',
        loadChildren:()=>import('./adjustments/adjustments.module').then((m)=>m.AdjustmentsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryMainRoutingModule { }
