import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterDataComponent } from './master-data.component';
import { CompanyComponent } from './company/company.component';
import { UsersComponent } from './users/users.component';
import { DepartmentsComponent } from './departments/departments.component';
import { RolesComponent } from './roles/roles.component';
import { CategoriesComponent } from './categories/categories.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ProductsComponent } from './products/products.component';
import { ExpenseTypeComponent } from './expense-type/expense-type.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MasterDataComponent, CompanyComponent, UsersComponent, DepartmentsComponent, RolesComponent, CategoriesComponent, ManufacturerComponent, SuppliersComponent, ProductsComponent, ExpenseTypeComponent, SettingsComponent]
})
export class MasterDataModule { }
