import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Navbar } from './navbar/navbar.component';
import { Banner } from './banner/banner.component';
import { Section1  } from './section1/section1.component';
import { Section2 } from './section2/section2.component';
import { Section3 } from './section3/section3.component';
import { Section4 } from './section4/section4.component';
import { Section5 } from './section5/section5.component';
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
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
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
