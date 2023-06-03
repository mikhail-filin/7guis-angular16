import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'guis-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.scss']
})
export class TemperatureConverterComponent {
  protected celsius: WritableSignal<number | null> = signal(null);
  protected fahrenheit: WritableSignal<number | null> = signal(null);

  protected celsiusComp = computed(() => {
    const fahrenheitVal = this.fahrenheit();
    return fahrenheitVal != null ?
      (fahrenheitVal - 32) * 5 / 9 :
      null;
  });
  protected fahrenheitComp = computed(() => {
    const celsiusVal = this.celsius();
    return celsiusVal != null ?
      celsiusVal * 9 / 5 + 32 :
      null;
  })
}
