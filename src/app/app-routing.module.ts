import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SlideComponent } from './components/slide/slide.component';
import { ServicesComponent } from './components/services/services.component';
import { TechnicalComponent } from './components/technical/technical.component';
import { SlideCustomerComponent } from './components/slide-customer/slide-customer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { ServicesUsComponent } from './pages/services-us/services-us.component';

const appRouters: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'hone', redirectTo: '/', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesUsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'recruitment', component: RecruitmentComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomePageComponent,
    SlideComponent,
    SlideCustomerComponent,
    ServicesComponent,
    TechnicalComponent,
    AboutUsComponent,
    ServicesUsComponent,
    NewsComponent,
    ContactComponent,
    RecruitmentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRouters,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CarouselModule,
    BrowserAnimationsModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
