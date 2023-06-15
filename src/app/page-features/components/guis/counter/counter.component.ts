import { Component, signal } from '@angular/core';

@Component({
  selector: 'guis-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  public counter = signal(0);

  public incrementValue() {
    this.counter.update((val) => ++val);
  }
}
