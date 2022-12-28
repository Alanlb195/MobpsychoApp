import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { HomeCartComponent } from './pages/home-cart/home-cart.component';
import { MaterialModule } from '../Material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class CartModule { }
