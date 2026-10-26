import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-comics-component',
  standalone: false,
  styleUrl: './comics-component.css',
  templateUrl: './comics-component.html'
}) // <- Faltaba cerrar el decorador
export class ComicsComponent implements OnInit {
  arrayComics: Array<any>;

  constructor(private _cdr: ChangeDetectorRef, private _serviceComics: ServiceComics) {
    this.arrayComics = [];
  } // <- Faltaba cerrar el constructor

  ngOnInit() {
    this.getComics();
  } // <- Faltaba cerrar ngOnInit

  getComics(): void {
    this._serviceComics.getComics().then((data) => {
      this.arrayComics = data;
      this._cdr.detectChanges();
    });
  } // <- Faltaba cerrar getComics
} // <- Faltaba cerrar la clase