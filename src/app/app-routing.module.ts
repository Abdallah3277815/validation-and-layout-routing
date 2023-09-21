import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

const routes: Routes = [
  {path:'' , component:BlankLayoutComponent , children:[
    {path: '' , redirectTo:'home' ,pathMatch:'full'},
    {path: 'home' , component:HomeComponent},
    {path: 'products' , component:ProductsComponent},
    {path: 'categories' , component:CategoriesComponent},
    {path: 'cart' , component:CartComponent},
    {path: 'brands' , component:BrandsComponent},
  ]},
  {path:'' , component:AuthLayoutComponent , children:[
    {path: 'login' , component:LoginComponent},
    {path: 'register' , component:RegisterComponent},
  ]},


 {path: '**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
