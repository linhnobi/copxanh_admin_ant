import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'cx-cart-product-shop',
    templateUrl: './shop.component.html',
})
export class CartProductShopComponent implements OnInit {

    quantityChange: number;

    @Input() products: any = [];
    constructor() {
        this.quantityChange = 0;
    }

    ngOnInit(): void { }

    onChangeQuantity(event: any) {
        this.quantityChange = event;
    }
}
