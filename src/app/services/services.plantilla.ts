import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import Empleado from '../models/Empleado';
@Injectable()
export class ServicePlantilla {

    constructor(private _http: HttpClient){}

    async getPlantillaAsync(): Promise<Empleado[]> {
    let urlApi = environment.urlApiPlantilla;
    let request = 'api/plantilla';
    console.log('URL API: ' + urlApi + request);
    let response = await firstValueFrom(this._http.get<Empleado[]>(urlApi + request));
    console.log('Response: ', response);
    return response;
    }

    getPlantillaByFuncion(funcion: string): Observable<Empleado[]> {
    let urlApi = environment.urlApiPlantilla;
    let request = '/api/Plantilla/PlantillaFuncion/' + funcion;
    console.log('URL API: ' + urlApi + request);
    return this._http.get<Empleado[]>(urlApi + request);
    }

    async getFuncionesAsync(): Promise<string[]> {
    let urlApi = environment.urlApiPlantilla;
    let request = 'api/Plantilla/Funciones';
    console.log('URL API: ' + urlApi + request);
    let response = await firstValueFrom(this._http.get<string[]>(urlApi + request));
    console.log('Response: ', response);
    return response;
    }
}