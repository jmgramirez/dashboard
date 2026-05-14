import { Component, Input, signal } from '@angular/core';
import { Registro } from './registro.model';

@Component({
  selector: 'app-registro-soporte',
  imports: [],
  templateUrl: './registro-soporte.html',
  styleUrl: './registro-soporte.css',
})
export class RegistroSoporte {
  @Input({required: true}) registro!: Registro;
  expanded = signal(false);

  toggleExpanded() {
    this.expanded.update(value => !value);
  }

  cerrarRegistro() {
    this.registro.estado = 'cerrado';
  }

}
