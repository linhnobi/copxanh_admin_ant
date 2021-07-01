import { Pipe, PipeTransform } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({name: 'moneyCart'})
export class MoneyCartPipe implements PipeTransform {
    transform(products: Array<any>, quantityChange: number): any {
        let sum = 0;
        const exchangeRate: any = localStorage.getItem('exchangeRate');
        console.log('exchangeRate :', exchangeRate);
        if (products.length === 1) {
            const price = products[0].price_promotion | products[0].price_origin;
            sum = price * products[0].quantity;
            return sum * exchangeRate;
        }
        sum = products.reduce((a: any, b: any) => {
            const priceA = a.price_promotion | a.price_origin;
            const priceB = b.price_promotion | b.price_origin;
            console.log('a :', a);
            console.log('priceA :', a.quantity * priceA);
            console.log('priceB :', b.quantity * priceB);
            return (a.quantity * priceA) + (b.quantity * priceB);
        })

        return sum * exchangeRate;
    }
}


@NgModule({
    declarations: [MoneyCartPipe],
    imports: [ CommonModule ],
    exports: [MoneyCartPipe],
    providers: [],
})
export class MoneyCartPipeModule {}