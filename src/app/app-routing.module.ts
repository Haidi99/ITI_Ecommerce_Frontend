import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllCategoriesComponent } from './categories/components/all-categories/all-categories.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"products", component:AllProductsComponent},
  {path:"details", component:ProductsDetailsComponent},
  {path:"categories", component:AllCategoriesComponent},
  {path:"cart", component:CartComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:RegisterComponent},
  {path:"**", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
