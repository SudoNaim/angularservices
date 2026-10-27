import { Component,ChangeDetectorRef,OnInit } from '@angular/core';
import Empleado from '../../models/Empleado';
import { ServicePlantilla } from '../../services/services.plantilla';


@Component({
  selector: 'app-plantilla-funcion-simple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-simple-component.css',
  templateUrl: './plantilla-funcion-simple-component.html',
})
export class PlantillaFuncionSimpleComponent {
  public arrayEmpleados!: Array<Empleado>;
  public arrayFunciones!: Array<string>;
  public funcionSeleccionada: string = '';

  constructor(private _cdr: ChangeDetectorRef, private _servicePlantilla: ServicePlantilla) {
    this.arrayEmpleados = new Array<Empleado>();
    this.arrayFunciones = new Array<string>();
  }
  

  loadEmpleadosByFuncion() {
    console.log('Selected Funcion: ', this.funcionSeleccionada);
    if (!this.funcionSeleccionada) {
      return;
    }

    this._servicePlantilla.getPlantillaByFuncion(this.funcionSeleccionada).subscribe((response) => {
      console.log('Empleados by Funcion: ', response);
      this.arrayEmpleados = response;
      this._cdr.detectChanges();
    }, (error) => {
      console.error('Error fetching empleados by funcion:', error);
    });
  }

  loadFunciones(){
    this._servicePlantilla.getFuncionesAsync().then((response) => {
      console.log('Funciones: ', response);
      this.arrayFunciones = response;
    }).catch((error) => {
      console.error('Error fetching funciones:', error);
    });
  }

  async ngOnInit(): Promise<void> {
    this.loadFunciones();
    this.arrayEmpleados = await this._servicePlantilla.getPlantillaAsync();
    this._cdr.detectChanges();
  }

}
