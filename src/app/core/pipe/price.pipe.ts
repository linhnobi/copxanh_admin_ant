import { Pipe, PipeTransform } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({name: 'price'})
export class PricePipe implements PipeTransform {
    transform(priceOrigin: number, pricePromotion: number): number {
        if (!pricePromotion) {
            return priceOrigin;
        }
        return pricePromotion;
    }
}


@NgModule({
    declarations: [PricePipe],
    imports: [ CommonModule ],
    exports: [PricePipe],
    providers: [],
})
export class PricePipeModule {}