import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../Material/material.module';
import { PizzaPartySnackbarComponent } from './components/snack-bar/snackbar.component';
import { SnackbarService } from './services/snackbar.service';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    PizzaPartySnackbarComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    PizzaPartySnackbarComponent,
    FooterComponent,
    NotFoundComponent,
  ]
})
export class SharedModule { }
