import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PizzaPartySnackbarComponent } from '../components/snack-bar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackBar: MatSnackBar
  ) { }


  openSnackBar(durationInSeconds: number) {
    this.snackBar.openFromComponent(PizzaPartySnackbarComponent, {
      duration: durationInSeconds * 1000,
    });
  }


}
