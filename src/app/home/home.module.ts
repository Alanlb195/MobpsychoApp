import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from '../Material/material.module';
import { ProductsModule } from '../products/products.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    MaterialModule,
    SharedModule,
    ProductsModule
  ]
})
export class HomeModule { }
