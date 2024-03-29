import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cx-currency',
    templateUrl: './service-change.component.html',
})
export class CurrencyServiceChangeComponent implements OnInit {
    listOfData = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park'
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park'
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park'
        }
      ];
    constructor() { }

    ngOnInit(): void { }
}
