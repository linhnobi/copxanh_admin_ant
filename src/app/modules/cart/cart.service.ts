import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AbstractApiRequestService } from '../../core/http-service/abstract-api-request.service';

@Injectable({
    providedIn: 'root'
})

export class CartService extends AbstractApiRequestService {

    private readonly _carts = new BehaviorSubject<any>([]);
    readonly carts$ = this._carts.asObservable();
    constructor(
        private _httpClient: HttpClient
    ) {
        super(_httpClient);
    }

    // get carts() {
    //     return this._carts.getValue();
    // }

    // private set carts(val) {
    //     this._carts.next(val);
    // }

    getCarts() {
        return this.get('carts');
    }
}