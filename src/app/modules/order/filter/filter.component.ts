import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cx-order-filter',
    templateUrl: './filter.component.html',
})
export class OrderFilterComponent implements OnInit {
    date = null;
    constructor() { }

    ngOnInit(): void { }

    log(): void {
        console.log('click dropdown button');
    }


    onChangeDate(result: Date[]): void {
        console.log('onChange: ', result);
    }
}
