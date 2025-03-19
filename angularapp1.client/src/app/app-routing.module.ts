import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { GetcatComponent } from './Admin/getcat/getcat.component';
import { GetproComponent } from './Admin/getpro/getpro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcatComponent } from './Admin/addcat/addcat.component';
import { AddproComponent } from './Admin/addpro/addpro.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'ProD/:id', component: ProductDetailsComponent },
  { path: 'dashboard/getcat', component: GetcatComponent },
  { path: 'dashboard/getpro', component: GetproComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/addcat', component: AddcatComponent },
  { path: 'dashboard/addpro', component: AddproComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
