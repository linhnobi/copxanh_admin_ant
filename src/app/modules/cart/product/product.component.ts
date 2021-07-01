import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'cx-cart-product',
    templateUrl: './product.component.html',
})
export class CartProductComponent implements OnInit {

    @Input() products: any = [];

    tabs = [
        {
            name: 'Thường',
            disabled: false
        },
        {
            name: 'Kí gửi',
            disabled: true
        }
    ];
    constructor() { }

    ngOnInit(): void { }
}
