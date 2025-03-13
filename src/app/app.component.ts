import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { DashboardCardComponent } from "./ui/dashboard-card/dashboard-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, TicketsComponent, TrafficComponent, ServerStatusComponent, DashboardCardComponent],
})
export class AppComponent {}
