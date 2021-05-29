import { AppLayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: '/welcome' },
//   { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }

  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // },
  {
      path: 'login',
      loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  
  {
    path: '',
    // loadChildren: () => import('./layout/layout.module').then(m => m.AppLayoutModule),
    component: AppLayoutComponent,
    children: [
      {
        path: 'cart',
        loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'order/detail',
        loadChildren: () => import('./modules/order/detail/detail.module').then(m => m.OrderDetailModule)
      
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
