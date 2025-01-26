import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockkeepRoutingModule } from './stockkeep-routing.module';
import { SkugroupComponent } from './skugroup/skugroup.component';
import { SkuComponent } from './sku/sku.component';
import { SiteComponent } from './site/site.component';
import { ZoneComponent } from './zone/zone.component';
import { LocationComponent } from './location/location.component';
import { CurrencyComponent } from './currency/currency.component';
import { StockmainComponent } from './stockmain/stockmain.component';


@NgModule({
  declarations: [
    SkugroupComponent,
    SkuComponent,
    SiteComponent,
    ZoneComponent,
    LocationComponent,
    CurrencyComponent,
    StockmainComponent
  ],
  imports: [
    CommonModule,
    StockkeepRoutingModule
  ]
})
export class StockkeepModule { }
