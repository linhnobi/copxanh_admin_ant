import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cx-cart',
    templateUrl: './cart.component.html',
    // styleUrls: ['./name.component.scss']
})
export class CartComponent implements OnInit {
    index = 0;

    constructor() { }

    ngOnInit(): void { }


    onIndexChange(event: number): void {
        this.index = event;
    }
}
