import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SingleComponent } from './components/single/single.component';
import { MoreComponent } from './components/more/more.component';
import { NotfoundComponent } from './components/notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    SingleComponent,
    MoreComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
