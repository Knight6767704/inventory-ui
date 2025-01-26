import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { PutwayComponent } from './putway/putway.component';
import { AllocationComponent } from './allocation/allocation.component';
import { EntityComponent } from './entity/entity.component';
import { AccountComponent } from './account/account.component';
import { PartnerComponent } from './partner/partner.component';
import { AccountmainComponent } from './accountmain/accountmain.component';


@NgModule({
  declarations: [
    PutwayComponent,
    AllocationComponent,
    EntityComponent,
    AccountComponent,
    PartnerComponent,
    AccountmainComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
