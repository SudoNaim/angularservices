import { Component } from '@angular/core';
import { Persona } from '../../models/Persona';
import { ServicePersonas } from '../../services/service.personas';
import { ChangeDetectorRef } from '@angular/core';
import {OnInit} from '@angular/core';
@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent implements OnInit {
  public personas!: Array<Persona>;

  constructor(
    private _servicePersonas: ServicePersonas,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._servicePersonas.getPersonas().subscribe((response) => {
      console.log("Leyendo respuestas");
      this.personas = response;
      this._cdr.detectChanges();
    });
  }
}
