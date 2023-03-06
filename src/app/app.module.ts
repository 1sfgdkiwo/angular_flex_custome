import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home/home.component';

import {  MatMenuModule } from '@angular/material/menu';
import {  MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list'; 
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HalamanAPIComponent } from './halaman-api/halaman-api.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HalamanAPIComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,FlexLayoutModule,MatMenuModule,MatIconModule,MatButtonModule,MatCardModule, BrowserAnimationsModule,MatListModule,MatChipsModule,MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
