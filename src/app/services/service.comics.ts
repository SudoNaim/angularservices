import { Injectable } from '@angular/core';
import Comic from '../models/Comic';

@Injectable({
  providedIn: 'root'
}) // <- Faltaba cerrar el decorador
export class ServiceComics {
    
    constructor() {} // <- Elimina ChangeDetectorRef de aquí

    getComics(): Promise<Array<Comic>> {
        let path = './assets/comics.json';
        return fetch(path)
            .then((response) => {
                return response.json();
            })
            .then((data: any[]) => {
                let arrayComics: Array<Comic> = [];
                for (let element of data) {
                    let comic = new Comic(element.nombre, element.imagen, element.descripcion);
                    arrayComics.push(comic);
                    console.log(element);
                }
                return arrayComics;
            });
    }
}