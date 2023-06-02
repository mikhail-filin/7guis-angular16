import { Component, signal } from '@angular/core';

@Component({
  selector: 'guis-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  protected counter = signal(0);

  protected incrementValue() {
    this.counter.update((val) => ++val);
  }
}
