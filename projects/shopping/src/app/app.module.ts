import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FordemoComponent } from './components/fordemo/fordemo.component';
import { Fordemo1Component } from './components/fordemo1/fordemo1.component';
import { ForpropertiesComponent } from './components/forproperties/forproperties.component';
import { IfdemoComponent } from './components/ifdemo/ifdemo.component';
import { RegisterComponent } from './components/register/register.component';
import { ServicedemoComponent } from './components/servicedemo/servicedemo.component';
import { Shoppingcar1Component } from './components/shoppingcar1/shoppingcar1.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';

import { SwitchdemoComponent } from './components/switchdemo/switchdemo.component';
import { Switchdemo1Component } from './components/switchdemo1/switchdemo1.component';

import { NasademoComponent } from './components/nasademo/nasademo.component';
import { SpringangularComponent } from './components/springangular/springangular.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { Templateform1Component } from './components/templateform1/templateform1.component';


@NgModule({
  declarations: [
    AppComponent,
    IfdemoComponent,
    SwitchdemoComponent,
    Switchdemo1Component,
    FordemoComponent,
    Fordemo1Component,
    ShoppingcartComponent,
    Shoppingcar1Component,
    ForpropertiesComponent,
    RegisterComponent,
    ServicedemoComponent,
    SpringangularComponent,
    NasademoComponent,
    TemplateformComponent,
    Templateform1Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ShoppingcartComponent]
})
export class AppModule { }
