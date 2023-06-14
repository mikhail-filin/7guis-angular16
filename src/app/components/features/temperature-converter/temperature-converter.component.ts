import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'guis-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.scss']
})
export class TemperatureConverterComponent {
  public celsius: WritableSignal<number | null> = signal(null);
  public fahrenheit: WritableSignal<number | null> = signal(null);

  public celsiusChange(updatedValue: number) {
    this.celsius.set(updatedValue);
    this.fahrenheit.set(updatedValue * 9 / 5 + 32)
  }

  public fahrenheitChange(updatedValue: number) {
    this.fahrenheit.set(updatedValue);
    this.celsius.set((updatedValue  - 32) * 5 / 9);
  }
}
