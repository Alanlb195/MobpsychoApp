import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path:'', component: ListadoComponent },
      { path: 'details', component: DetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
