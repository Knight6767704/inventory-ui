import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsRoutingModule } from './goods-routing.module';
import { GoodissueComponent } from './goodissue/goodissue.component';
import { GoodreceiveComponent } from './goodreceive/goodreceive.component';
import { GoodsmainComponent } from './goodsmain/goodsmain.component';


@NgModule({
  declarations: [
    GoodissueComponent,
    GoodreceiveComponent,
    GoodsmainComponent
  ],
  imports: [
    CommonModule,
    GoodsRoutingModule
  ]
})
export class GoodsModule { }
