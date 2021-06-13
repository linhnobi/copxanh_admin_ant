import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService  {
    currentUser: Observable<any>;
    private currentUserSubject: BehaviorSubject<any>;

    constructor(
        private http: HttpClient,
    ) {
        // JSON.parse(localStorage.getItem('token') || '{}')
        this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('token') || '');
        this.currentUser = this.currentUserSubject.asObservable();
    }

    get currentUserValue() {
        return this.currentUserSubject.value;
    }

    login(body: any) {
        return this.http.post('http://copxanh.com/api/login', body);
    }
}

