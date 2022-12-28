import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/security/auth.guard';

import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('../home/home.module').then((m) => m.HomeModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'cart',
                loadChildren: () =>
                    import('../cart/cart.module').then((m) => m.CartModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'products',
                loadChildren: () =>
                    import('../products/products.module').then((m) => m.ProductsModule),
                canActivate: [AuthGuard]
            },
            {
                path: '**',
                redirectTo: 'home',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }