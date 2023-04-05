import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Screen1Component } from './screens/screen1/screen1.component';
import { Screen2Component } from './screens/screen2/screen2.component';
import {MatTableModule } from '@angular/material/table';
import { SimpleTableComponent } from './screens/simple-table/simple-table.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    Screen1Component,
    Screen2Component,
    // SimpleTableComponent,
    // MatTableModule,
  ],
  imports: [
    // SimpleTableComponent,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
