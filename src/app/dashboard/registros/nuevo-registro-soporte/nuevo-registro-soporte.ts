import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Boton } from '../../../compartida/boton/boton';
import { Registro } from '../registro-soporte/registro.model';

@Component({
  selector: 'app-nuevo-registro-soporte',
  imports: [Boton, FormsModule],
  templateUrl: './nuevo-registro-soporte.html',
  styleUrl: './nuevo-registro-soporte.css',
})
export class NuevoRegistroSoporte {
  @Output() nuevoRegistro = new EventEmitter<Registro>();
  @ViewChild('formularioSoporte')
  private formularioSoporte?: ElementRef<HTMLFormElement>;

  guardarRegistro(titulo: string, pedido: string) {
     const registro: Registro = { 
      id: Date.now().toString(),
      titulo, 
      pedido,
      estado: 'abierto'
    };
    this.nuevoRegistro.emit(registro);
    this.limpiarCampos();
  }


  limpiarCampos() {
    this.formularioSoporte?.nativeElement.reset(); // Reinicia el formulario para limpiar los campos
  }
} 
