import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { OrderDetailComponent } from './detail.component';
import { OrderDetailPackageComponent } from './package/package.component';
import { OrderDetailHistoryComponent } from './history/history.component';
import { OrderDetailChatComponent } from './chat/chat.component';
import { OrderDetailTransactionComponent } from './transaction/transaction.component';
import { OrderDetailComplainComponent } from './complain/complain.component';
import { OrderDetailFinanceComponent } from './finance/finance.component';
import { OrderDetailProductComponent } from './product/product.component';
import { OrderDetailInfoComponent } from './info/info.component';

const routes: Routes = [
    { 
        path: '',
        component: OrderDetailComponent
    },
];

@NgModule({
    declarations: [
        OrderDetailComponent,
        OrderDetailPackageComponent,
        OrderDetailHistoryComponent,
        OrderDetailChatComponent,
        OrderDetailTransactionComponent,
        OrderDetailComplainComponent,
        OrderDetailInfoComponent,
        OrderDetailFinanceComponent,
        OrderDetailProductComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NzTableModule,
        NzInputModule,
        NzButtonModule,
        NzCardModule,
        NzImageModule,
        NzCheckboxModule
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class OrderDetailModule {}