import { mainViewComponent } from "./views/main-view/main-view.component";
import { minorViewComponent } from "./views/minor-view/minor-view.component";
import { MasterDataComponent } from "./views/master-data/master-data.component";
import { LoginComponent } from "./views/login/login.component";
import { CompanyComponent } from "./views/master-data/company/company.component";
import { UsersComponent } from "./views/master-data/users/users.component";
import { DepartmentsComponent } from "./views/master-data/departments/departments.component";
import { RolesComponent } from "./views/master-data/roles/roles.component";
import { CategoriesComponent } from "./views/master-data/categories/categories.component";
import { ManufacturerComponent } from "./views/master-data/manufacturer/manufacturer.component";
import { SuppliersComponent } from "./views/master-data/suppliers/suppliers.component";
import { ProductsComponent } from "./views/master-data/products/products.component";
import { ExpenseTypeComponent } from "./views/master-data/expense-type/expense-type.component";
import { SettingsComponent } from "./views/master-data/settings/settings.component";

import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      // Main redirect
      { path: '', redirectTo: 'mainView', pathMatch: 'full' },

      // App views
      { path: 'mainView', component: mainViewComponent },
      { path: 'minorView', component: minorViewComponent },
      { path: 'masterData', component: MasterDataComponent },
      { path: 'login', component: LoginComponent , pathMatch: 'full'},
      { path: 'company', component: CompanyComponent },
      { path: 'users', component: UsersComponent },
      { path: 'departments', component: DepartmentsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'manufacturer', component: ManufacturerComponent },
      { path: 'suppliers', component: SuppliersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'expenseType', component: ExpenseTypeComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'roles', component: RolesComponent },

      // Handle all other routes
      { path: '**', component: MasterDataComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
