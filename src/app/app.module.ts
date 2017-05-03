import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {HomePage} from '../pages/home/home';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '/accueil', component: HomePage },
   { path: '/', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    HomePage,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
