import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Counter App';
  counter: number = 0;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }

  reset(): void {
    this.counter = 0;
  }
}
