import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AllocationComponent } from './allocation/allocation.component';
import { EntityComponent } from './entity/entity.component';
import { PartnerComponent } from './partner/partner.component';
import { PutwayComponent } from './putway/putway.component';
import { AccountmainComponent } from './accountmain/accountmain.component';
const routes: Routes = [
  {
    path:'',
    component: AccountmainComponent,
    children:[
      {
        path:'account',
        component:AccountComponent
      },
      {
        path:'allocation',
        component: AllocationComponent
      },
      {
        path:'entity',
        component: EntityComponent 
      },
      {
        path:'partner',
        component: PartnerComponent 
      },
      {
        path:'putway',
        component: PutwayComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
