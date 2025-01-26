import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { LocationComponent } from './location/location.component';
import { SiteComponent } from './site/site.component';
import { SkuComponent } from './sku/sku.component';
import { SkugroupComponent } from './skugroup/skugroup.component';
import { ZoneComponent } from './zone/zone.component';
import { StockmainComponent } from './stockmain/stockmain.component';
const routes: Routes = [
  {
    path:'',
    component:StockmainComponent,
    children:[
      {
        path:'currency',
        component:CurrencyComponent 
      },
      {
        path:'location',
        component: LocationComponent  
      },
      {
        path:'site',
        component:SiteComponent  
      },
      {
        path:'sku',
        component:SkuComponent   
      },
      {
        path:'skugroup',
        component:SkugroupComponent  
      },
      {
        path:'zone',
        component:ZoneComponent  
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockkeepRoutingModule { }
