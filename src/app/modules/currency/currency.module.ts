import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyExchangeRateComponent } from './exchange-rate/exchange-rate.component';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CurrencyServiceChangeComponent } from './service-change/service-change.component';

const routes: Routes = [
    { path: 'exchange-rate', component: CurrencyExchangeRateComponent },
    { path: 'fee', component: CurrencyServiceChangeComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NzInputModule,
        NzButtonModule,
        NzTableModule
    ],
    declarations: [
        CurrencyExchangeRateComponent,
        CurrencyServiceChangeComponent
    ],
    exports: [RouterModule],
    providers: [],
})
export class CurrencyModule {}