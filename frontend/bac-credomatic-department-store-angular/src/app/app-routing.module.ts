import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProductComponent } from './product/product/product.component';
import { ProductManagementComponent } from './product/product-management/product-management.component';
import { ProductCategoryComponent } from './product-category/product-category/product-category.component';
import { ProductCategoryManagementComponent } from './product-category/product-category-management/product-category-management.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-management', component: ProductManagementComponent },
  { path: 'product-category', component: ProductCategoryComponent },
  {
    path: 'product-category-management',
    component: ProductCategoryManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
export const routingComponents = [
  LoginComponent,
  DashboardComponent,
  ProductComponent,
  ProductManagementComponent,
  ProductCategoryComponent,
  ProductCategoryManagementComponent,
];
