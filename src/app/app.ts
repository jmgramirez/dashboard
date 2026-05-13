import { Component, Output } from '@angular/core';
import { Encabezado } from "./encabezado/encabezado";
import { EstadoServidor } from "./dashboard/estado-servidor/estado-servidor";
import { Trafico } from './dashboard/trafico/trafico';
import { Soporte } from './dashboard/soporte/soporte';
import { DashboardElement } from "./dashboard/dashboard-element/dashboard-element";

@Component({
  selector: 'app-root',
  imports: [Encabezado, EstadoServidor, Trafico, Soporte, DashboardElement],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  }
