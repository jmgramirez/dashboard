import { Component } from '@angular/core';
import { Boton } from "../compartida/boton/boton";

@Component({
  selector: 'app-encabezado',
  imports: [Boton],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css',
})
export class Encabezado {}
