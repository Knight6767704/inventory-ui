import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargecodeComponent } from './chargecode/chargecode.component';
const routes: Routes = [
  {
    path:'',
    component:ChargecodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChargeCodeRoutingModule { }
