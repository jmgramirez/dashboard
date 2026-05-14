import { Component, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { NuevoRegistroSoporte } from "../registros/nuevo-registro-soporte/nuevo-registro-soporte";
import { Registro } from '../registros/registro-soporte/registro.model';
import { RegistroSoporte } from "../registros/registro-soporte/registro-soporte";

@Component({
  selector: 'app-soporte',
  imports: [NuevoRegistroSoporte, RegistroSoporte],
  templateUrl: './soporte.html',
  styleUrl: './soporte.css',
})
export class Soporte {
  @Output() imagen = { src: 'lista.png', alt: 'Una lista de items' };
  @Output() texto = 'Registros de Soporte';

  registros: Registro[] = [];
  
  guardarRegistro(registro: Registro) {
    this.registros.push(registro);
  }

}
