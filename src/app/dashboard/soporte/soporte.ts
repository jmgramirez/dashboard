import { Component, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-soporte',
  imports: [],
  templateUrl: './soporte.html',
  styleUrl: './soporte.css',
})
export class Soporte {
  @Output() imagen = { src: 'lista.png', alt: 'Una lista de items' };
  @Output() texto = 'Registros de Soporte';
}
