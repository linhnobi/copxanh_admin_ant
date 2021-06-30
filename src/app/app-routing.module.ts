import { AppLayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/helpers/auth.guard';

const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: '/welcome' },
//   { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }

  {
    path: '',
    redirectTo: 'admin/auth',
    pathMatch: 'full'
  },
  {
      path: 'admin/auth',
      loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  
  {
    path: 'admin',
    // loadChildren: () => import('./layout/layout.module').then(m => m.AppLayoutModule),
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'cart',
        loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule)
      },
      // {
      //   path: 'order/detail',
      //   loadChildren: () => import('./modules/order/detail/detail.module').then(m => m.OrderDetailModule)
      
      // },
      {
        path: 'currency',
        loadChildren: () => import('./modules/currency/currency.module').then(m => m.CurrencyModule)
      
      },
    ]
  },
  // {
  //     path: '**',
  //     redirectTo: '/login',
  //     pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
