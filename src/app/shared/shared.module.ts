import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../Material/material.module';
import { PizzaPartySnackbarComponent } from './components/snack-bar/snackbar.component';
import { SnackbarService } from './services/snackbar.service';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    PizzaPartySnackbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    PizzaPartySnackbarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
