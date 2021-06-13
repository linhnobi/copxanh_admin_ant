import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { CartComponent } from './cart.component';
import { CartProductModule } from './product/product.module';
import { CartAddressModule } from './address/address.module';
import { CartSuccessComponent } from './success/success.component';
import { CartService } from './cart.service';

const routes: Routes = [
    { 
        path: '',
        component: CartComponent
    },
];

@NgModule({
    declarations: [
        CartComponent,
        CartSuccessComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CartProductModule,
        CartAddressModule,
        NzStepsModule,
        NzResultModule,
        NzButtonModule
    ],
    exports: [RouterModule],
    providers: [
        CartService
    ],
})
export class CartModule {}