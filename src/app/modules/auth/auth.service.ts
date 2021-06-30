import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AbstractApiRequestService } from 'src/app/core/http-service/abstract-api-request.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService extends AbstractApiRequestService {
    currentUser: Observable<any>;
    private currentUserSubject: BehaviorSubject<any>;

    constructor(
        private _httpClient: HttpClient,
    ) {
        super(_httpClient);
        // JSON.parse(localStorage.getItem('token') || '{}')
        this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('token') || '');
        this.currentUser = this.currentUserSubject.asObservable();
    }

    get currentUserValue() {
        return this.currentUserSubject.value;
    }

    login(body: any) {
        return this.post('login', body);
    }

    getExchangeRate(){
        return this.get('exchange-rate');

    }
}

