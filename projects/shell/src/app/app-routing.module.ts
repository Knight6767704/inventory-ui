import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
export const routes: Routes = [
  {
    path: 'Inventory',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'inventory',
        exposedModule: './InventoryModule',
      }).then((m) =>m.InventoryMainModule),
  },
  {
    path: 'sale',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'sales',
        exposedModule: './SalesModule',
      }).then((m) =>m.SalesMainModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'Admin',
        exposedModule: './AdminModule',
      }).then((m) =>m.AdminMainModule),
  },
  {
    path: 'wearhouse',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'Wearhouse',
        exposedModule: './WearhouseModule',
      }).then((m) =>m. WearhouseMainModule ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
