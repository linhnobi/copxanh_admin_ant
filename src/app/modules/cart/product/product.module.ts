import { CartProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { CartProductNormalComponent } from './normal/normal.component';
import { CartProductShopComponent } from './shop/shop.component';
import { CartProductItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { ExchangeMoneyPipeModule } from '../../../core/pipe/exchange-money.pipe';
import { SumMoneyPipeModule } from '../../../core/pipe/sum-money.pipe';
import { PricePipeModule } from '../../../core/pipe/price.pipe';
import { MoneyCartPipeModule } from '../pipe/money-cart.pipe';

@NgModule({
    declarations: [
        CartProductComponent,
        CartProductNormalComponent,
        CartProductShopComponent,
        CartProductItemComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        NzTabsModule,
        NzInputModule,
        NzButtonModule,
        NzImageModule,
        NzInputNumberModule,
        NzDividerModule,
        NzCheckboxModule,
        ExchangeMoneyPipeModule,
        SumMoneyPipeModule,
        PricePipeModule,
        MoneyCartPipeModule
    ],
    exports: [
        CartProductComponent
    ],
    providers: [],
})
export class CartProductModule {}