import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoldComponent } from './hold/hold.component';
import { MoveComponent } from './move/move.component';
import { TransferComponent } from './transfer/transfer.component';
const routes: Routes = [
  {
    path:'move',
    component: MoveComponent 
  },
  {
    path:'transfer',
    component: TransferComponent
  },
  {
    path:'hold',
    component:HoldComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotionRoutingModule { }
