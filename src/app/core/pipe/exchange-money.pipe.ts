import { Pipe, PipeTransform } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({name: 'exchangeMoney'})
export class ExchangeMoneyPipe implements PipeTransform {
    transform(priceOrigin: number, pricePromotion: number): number {
        
        const exchangeRate: any = localStorage.getItem('exchangeRate');
        if (pricePromotion === 0) {
            return priceOrigin * parseInt(exchangeRate);
        }

        return pricePromotion * parseInt(exchangeRate);
    }
}


@NgModule({
    declarations: [
        ExchangeMoneyPipe
    ],
    imports: [ CommonModule ],
    exports: [
        ExchangeMoneyPipe
    ],
    providers: [],
})
export class ExchangeMoneyPipeModule {}