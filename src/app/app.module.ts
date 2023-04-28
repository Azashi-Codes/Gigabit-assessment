import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Navbar } from './navbar/navbar.component';
import { Banner } from './banner/banner.component';
import { Pricesection } from './pricesection/pricesection.component';
import { Footer } from './footer/footer.component';
import {Requestform} from './requestform/requestform.component'

const routes: Routes = [
  { path: 'form', component: Requestform }
];

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    Banner,
    Pricesection,
    Footer
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
