import { Component, Input } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-dashboard-element',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './dashboard-element.html',
  styleUrl: './dashboard-element.css',
})
export class DashboardElement {
  @Input({required: true}) imagen!: { src: string; alt: string };
  @Input({required: true}) texto!: string;
}
