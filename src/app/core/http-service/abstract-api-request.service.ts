import { HttpClient } from "@angular/common/http";

export abstract class AbstractApiRequestService {
    baseUrl: string;
    constructor(
        protected _http: HttpClient,
    ) {
    //    this.baseUrl = 'https://copxanh.com/api/'
       this.baseUrl = 'http://localhost:8000/api/';
    }

    get(url: string) {
        console.log('get');
        const urlApi = `${this.baseUrl}${url}`;
        return this._http.get(urlApi);
    }

    post(url: string, body: any, opts?: any) {
        const urlApi = `${this.baseUrl}${url}`;
        return this._http.post(urlApi, body, opts);
    }

    put(url: string, body: any, opts?: any) {
        const urlApi = `${this.baseUrl}${url}`;
        return this._http.put(urlApi, body, opts);
    }

    patch(url: string, body: any, opts?: any) {
        const urlApi = `${this.baseUrl}${url}`;
        return this._http.patch(urlApi, body, opts);
    }

    delete(url: string, opts?: any) {
        const urlApi = `${this.baseUrl}${url}`;
        return this._http.delete(urlApi, opts);
    }
}