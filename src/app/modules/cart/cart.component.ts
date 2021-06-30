import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
    selector: 'cx-cart',
    templateUrl: './cart.component.html',
    // styleUrls: ['./name.component.scss']
})
export class CartComponent implements OnInit {
    index = 0;
    products: Array<any> = [];

    constructor(
        private _cartService: CartService
    ) { }

    ngOnInit(): void {
        //this.getCarts();
    }


    onIndexChange(event: number): void {
        this.index = event;
    }

    // private getCarts() {
    //     this._cartService.getCarts().subscribe((res:any) => {
    //         console.log('res :', res);
    //         this.convertData(res.data);
    //     })
    // }

    // private convertData(carts: Array<any>) {
    //     this.products = [];
    //     carts.forEach(cart => {
    //         if(this.products.length === 0) {
    //             this.products.push({
    //                 'shop_id': cart.shop_id,
    //                 'shop_name': cart.shop_name,
    //                 'items': [cart]
    //             });
    //         } else {
    //             const index = this.products.findIndex(item => item.shop_id === cart.shop_id);
    //             if (index === -1) {
    //                 this.products.push({
    //                     'shop_id': cart.shop_id,
    //                     'shop_name': cart.shop_name,
    //                     'items': [cart]
    //                 });
    //                 return;
    //             } 
    //             // else {
    //             this.products[index].items.push(cart);
    //             // }

    //         }
    //     });

    //     console.log('this.data :', this.products);
    //     // return data;
    // }
}
