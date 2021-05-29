import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { OrderComponent } from './order.component';


const routes: Routes = [
    { 
        path: '',
        component: OrderComponent,
    },
    {
        path: '/detail',
        loadChildren: () => import('./detail/detail.module').then(m => m.OrderDetailModule),
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule {}
