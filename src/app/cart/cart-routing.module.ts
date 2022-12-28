import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCartComponent } from './pages/home-cart/home-cart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeCartComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
