import { Pipe, PipeTransform } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({name: 'sumMoney'})
export class SumMoneyPipe implements PipeTransform {
    transform(price: number, quality: number): number {
        return price * quality;
    }
}


@NgModule({
    declarations: [SumMoneyPipe],
    imports: [ CommonModule ],
    exports: [SumMoneyPipe],
    providers: [],
})
export class SumMoneyPipeModule {}