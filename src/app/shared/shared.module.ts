import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AllCategoriesComponent } from '../categories/components/all-categories/all-categories.component';
import { AllProductsComponent } from '../products/components/all-products/all-products.component';




@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent, HomeComponent
  ]
})
export class SharedModule { }
