import { Component, OnDestroy, OnInit, signal } from '@angular/core';

enum Status {
  online = 'online',
  offline = 'offline',
  unknown = 'unknown',
}

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<Status>(Status.online);
  private interval?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set(Status.online);
      } else if (rnd < 0.9) {
        this.currentStatus.set(Status.offline);
      } else {
        this.currentStatus.set(Status.unknown);
      }
    }, 5000);
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
