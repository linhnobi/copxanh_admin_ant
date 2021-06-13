import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractApiRequestService } from '../../core/http-service/abstract-api-request.service';

@Injectable({
    providedIn: 'root'
})
// extends AbstractApiRequestService 
export class CartService {
    constructor(
        private _httpClient: HttpClient
    ) {
        // super(_httpClient);
    }

    getCarts() {
        console.log('get cart');
        const token = localStorage.getItem('token');
        return this._httpClient.get('https://copxanh.com/api/carts', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
    }
}