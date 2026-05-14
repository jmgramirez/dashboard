import { Component } from '@angular/core';
import { Boton } from '../../../compartida/boton/boton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-registro-soporte',
  imports: [Boton, FormsModule],
  templateUrl: './nuevo-registro-soporte.html',
  styleUrl: './nuevo-registro-soporte.css',
})
export class NuevoRegistroSoporte {

  titulo: string = '';
  pedido: string = '';

  guardarRegistro() {
    // Aquí iría la lógica para guardar el nuevo registro de soporte
    console.log('Registro de soporte guardado');
    console.log('Título:', this.titulo);
    console.log('Pedido:', this.pedido);
    this.titulo = '';
    this.pedido = '';
  }
} 
