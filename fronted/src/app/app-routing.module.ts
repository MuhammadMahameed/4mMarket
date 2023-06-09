import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/chekout-page.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'products/:id', component:ProductsPageComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'checkout',component:CheckoutPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
