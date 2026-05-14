import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-estado-servidor',
  imports: [],
  templateUrl: './estado-servidor.html',
  styleUrls: ['./estado-servidor.css'],
})
export class EstadoServidor implements OnInit {
  estadoActual = signal<'online' | 'offline' | 'unknown'>('unknown');
  private readonly estados = ['online', 'offline', 'unknown'] as const;

  ngOnInit() {
    setInterval(() => {
      const opciones = this.estados.filter((estado) => estado !== this.estadoActual());
      this.estadoActual.set(opciones[Math.floor(Math.random() * opciones.length)]);
    }, 3000);
  }
}
