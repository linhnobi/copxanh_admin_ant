import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { map, catchError, repeat } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpConfigInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        if (token) {
            req = req.clone({
                headers: req.headers
                  .set('Authorization', `Bearer ${token}`)
              });
        }
        console.log('req :', req);
        // console.log('next :', next);
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log('error :', error);
                return throwError(error);
            })
        );
    }
}