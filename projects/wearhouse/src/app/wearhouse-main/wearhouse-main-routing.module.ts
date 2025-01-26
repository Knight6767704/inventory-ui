import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path:'',
    component:MainComponent ,
    children:[
      {
        path:'accounts',
        loadChildren:()=>import('./accounts/accounts.module').then((m)=>m.AccountsModule)
      },
      {
        path:'goods',
        loadChildren:()=>import('./goods/goods.module').then((m)=>m.GoodsModule)
      },
      {
        path:'stockkeep',
        loadChildren:()=>import('./stockkeep/stockkeep.module').then((m)=>m.StockkeepModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WearhouseMainRoutingModule { }
