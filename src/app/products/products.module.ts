import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { DetailsComponent } from './pages/details/details.component';
import { ListadoComponent } from './components/listado/listado.component';
import { MaterialModule } from '../Material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DetailsComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    ListadoComponent
  ]
})
export class ProductsModule { }
