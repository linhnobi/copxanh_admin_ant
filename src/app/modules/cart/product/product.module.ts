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

@NgModule({
    declarations: [
        CartProductComponent,
        CartProductNormalComponent,
        CartProductShopComponent,
        CartProductItemComponent
    ],
    imports: [ 
        CommonModule,
        NzTabsModule,
        NzInputModule,
        NzButtonModule,
        NzImageModule,
        NzInputNumberModule,
        NzDividerModule,
        NzCheckboxModule
    ],
    exports: [
        CartProductComponent
    ],
    providers: [],
})
export class CartProductModule {}