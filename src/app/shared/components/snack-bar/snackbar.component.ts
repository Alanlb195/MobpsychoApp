import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-snack-bar',

//   template: `
//   <mat-form-field appearance="fill">
//     <mat-label>Snack bar duration (seconds)</mat-label>
//     <input type="number" [(ngModel)]="durationInSeconds" matInput>
//   </mat-form-field>

//   <button mat-stroked-button (click)="openSnackBar()" aria-label="Show an example snack-bar">
//       Pizza party
//   </button>`,

//   styles: [
//     `
//       mat-form-field {
//         margin-right: 12px;
//     }
//   `,

//   ]
// })
// export class SnackBarComponent {

//   constructor(
//     private snackBar: MatSnackBar
//   ) { }

//   durationInSeconds = 5;

//   openSnackBar() {
//     this.snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
//       duration: this.durationInSeconds * 1000,
//     });
//   }
// }


@Component({
  selector: 'app-snack-bar',
  templateUrl: 'snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class PizzaPartySnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);
}