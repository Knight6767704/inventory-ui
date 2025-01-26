import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodissueComponent } from './goodissue/goodissue.component';
import { GoodreceiveComponent } from './goodreceive/goodreceive.component';
import { GoodsmainComponent } from './goodsmain/goodsmain.component';
const routes: Routes = [
  {
    path:'',
    component:GoodsmainComponent,
    children:[
      {
        path:'goodsissue',
        component: GoodissueComponent
      },
      {
        path:'goodsreceive',
        component:GoodreceiveComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
