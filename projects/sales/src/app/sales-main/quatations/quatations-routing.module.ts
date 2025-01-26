import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuatationComponent } from './quatation/quatation.component';
const routes: Routes = [
  {
    path:'',
    component:QuatationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuatationsRoutingModule { }
