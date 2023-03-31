import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) }, 
  { path: 'product', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) }, 
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) }, 
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
