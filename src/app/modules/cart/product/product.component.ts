import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cx-cart-product',
    templateUrl: './product.component.html',
})
export class CartProductComponent implements OnInit {

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
