import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
    selector: 'cx-cart',
    templateUrl: './cart.component.html',
    // styleUrls: ['./name.component.scss']
})
export class CartComponent implements OnInit {
    index = 0;

    constructor(
        private _cartService: CartService
    ) { }

    ngOnInit(): void {
        this.getCarts();
    }


    onIndexChange(event: number): void {
        this.index = event;
    }

    private getCarts() {
        this._cartService.getCarts().subscribe(res => {
            console.log('res :', res);
        })
    }
}
