import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-name',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
    isCollapsed = false;
    constructor() { }

    ngOnInit(): void {
        
    }
}
