import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { CartAddressComponent } from './address.component';

@NgModule({
    declarations: [
        CartAddressComponent
    ],
    imports: [
        CommonModule,
        NzDescriptionsModule,
        NzTableModule,
        NzInputModule,
        NzButtonModule
    ],
    exports: [
        CartAddressComponent
    ],
    providers: [],
})
export class CartAddressModule {}