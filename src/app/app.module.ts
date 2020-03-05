import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SlideComponent } from './components/slide/slide.component';
import { SlideCustomerComponent } from './components/slide-customer/slide-customer.component';

import { AppRoutingModule } from './app-routing.module';
import { ServicesComponent } from './components/services/services.component';
import { TechnicalComponent } from './components/technical/technical.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    SlideComponent,
    SlideCustomerComponent,
    ServicesComponent,
    TechnicalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
