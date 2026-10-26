import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ServicePersonas{
    constructor(private _http: HttpClient){

    }
    getPersonas(): Observable<any>{
        let urlApi: string = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        return this._http.get(urlApi);
        
    }
} 