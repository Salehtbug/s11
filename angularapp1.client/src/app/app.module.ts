import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcatComponent } from './Admin/addcat/addcat.component';
import { AddproComponent } from './Admin/addpro/addpro.component';
import { GetcatComponent } from './Admin/getcat/getcat.component';
import { GetproComponent } from './Admin/getpro/getpro.component';
import { GetprocatComponent } from './Admin/getprocat/getprocat.component';
import { DahsboardComponent } from './Admin/dahsboard/dahsboard.component';
import { EditcatComponent } from './editcat/editcat.component';
import { EditproComponent } from './editpro/editpro.component';
import { VoucherComponent } from './voucher/voucher.component';
import { VouchereditComponent } from './voucheredit/voucheredit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,  
    SignInComponent,
    SignUpComponent,
    CategoryComponent,
    ProductComponent,
    ProductDetailsComponent,
    DashboardComponent,
    AddcatComponent,
    AddproComponent,
    GetcatComponent,
    GetproComponent,
    GetprocatComponent,
    DahsboardComponent,
    EditcatComponent,
    EditproComponent,
    VoucherComponent,
    VouchereditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
