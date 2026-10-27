import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Coche from '../models/Coche';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';
@Injectable()
export class ServiceCoches {
  constructor(private _http: HttpClient) {}

  async getCochesAsync(): Promise<Coche[]> {
    let urlApi = environment.urlApiCoches;
    let request = 'webresources/coches';
    console.log('URL API: ' + urlApi + request);
    let response = await firstValueFrom(this._http.get<Coche[]>(urlApi + request));
    console.log('Response: ', response);
    return response;
  }
}
