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
import { NewsHomeComponent } from './components/news-home/news-home.component';
import { ServiceDetailComponent } from './pages/services-us/service-detail/service-detail.component';
import { RenderHtmlPipe } from './pipes/render-html.pipe';
import { NewDetailComponent } from './components/news-home/new-detail/new-detail.component';
import { TechnicalDetailComponent } from './components/technical/technical-detail/technical-detail.component';
import { RecruitmentDetailComponent } from './pages/recruitment/recruitment-detail/recruitment-detail.component';
import { SpecialProductsComponent } from './components/special-products/special-products.component';

const appRouters: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'hone', redirectTo: '/', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', 
    children: [
      {
        path: '',
        component: ServicesUsComponent
      },
      {
        path: ':id',
        component: ServiceDetailComponent,      
      }
    ]
  },
  { path: 'news', 
    children: [
      { path: '', component: NewsComponent },
      { path: ':id', component: NewDetailComponent },
    ]
  },
  { path:'technical/:id' , component: TechnicalDetailComponent },
  { path: 'recruitment', 
    children: [
      { path: '', component: RecruitmentComponent },
      { path: ':id', component: RecruitmentDetailComponent }
    ]
  },
  { path: 'contact', component: ContactComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    RenderHtmlPipe,
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
    NewsHomeComponent,
    ServiceDetailComponent,
    NewDetailComponent,
    TechnicalDetailComponent,
    RecruitmentDetailComponent,
    SpecialProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRouters,
      { enableTracing: false } // <-- debugging purposes only
    ),
    CarouselModule,
    BrowserAnimationsModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
