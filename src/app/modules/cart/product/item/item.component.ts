import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cx-cart-product-item',
    templateUrl: './item.component.html',
})
export class CartProductItemComponent implements OnInit {

    demoValue = 3;

    constructor() { }

    ngOnInit(): void { }
}
