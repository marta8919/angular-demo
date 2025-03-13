import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.css',
})
export class DashboardCardComponent {
  title = input.required<string>();
  image = input.required<{ src: string; alt: string }>();
}
