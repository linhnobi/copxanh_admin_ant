import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { OrderLeftComponent } from './left/left.component';
import { OrderFilterComponent } from './filter/filter.component';
import { OrderItemComponent } from './item/item.component';
import { OrderDetailModule } from './detail/detail.module';



@NgModule({
    declarations: [
        OrderComponent,
        OrderLeftComponent,
        OrderFilterComponent,
        OrderItemComponent
    ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        OrderDetailModule,
        NzCollapseModule,
        NzImageModule,
        NzButtonModule,
        NzInputModule,
        NzCheckboxModule,
        NzIconModule,
        NzDropDownModule,
        NzDatePickerModule
    ],
    exports: [],
    providers: [],
})
export class OrderModule {}