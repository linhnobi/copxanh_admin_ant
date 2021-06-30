import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'cx-cart-product-item',
    templateUrl: './item.component.html',
})
export class CartProductItemComponent implements OnInit {

    @Input() product: any;
    @Output() changeQuantity = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void { }

    onChangeQuantity(quantity: any) {
        console.log('event : ', quantity)
        this.product.quantity = quantity;
        this.changeQuantity.emit(quantity);
    }
}
