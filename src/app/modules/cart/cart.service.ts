import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractApiRequestService } from '../../core/http-service/abstract-api-request.service';

@Injectable({
    providedIn: 'root'
})

export class CartService extends AbstractApiRequestService {
    constructor(
        private _httpClient: HttpClient
    ) {
        super(_httpClient);
    }

    getCarts() {
        console.log('get cart');
        return this.get('carts');
    }
}