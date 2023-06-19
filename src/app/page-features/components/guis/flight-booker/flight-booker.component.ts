import { Component, computed, signal, WritableSignal } from '@angular/core';
import { SelectOption } from '../../../models/select-option.model';
import { ONE_WAY_FLIGHT, RETURN_FLIGHT } from './flight-types.const';

@Component({
  selector: 'guis-flight-booker',
  templateUrl: './flight-booker.component.html',
  styleUrls: ['./flight-booker.component.scss']
})
export class FlightBookerComponent {
  public selectedFlightType = signal(ONE_WAY_FLIGHT);
  public startDate = signal(new Date());
  public endDate = signal(new Date());

  protected isOneWay = computed(() => {
    return this.selectedFlightType() === ONE_WAY_FLIGHT;
  });
  protected isStartDateValid = computed(() => {
    return this.isOneWay() ||
      !this.isOneWay() && this.startDate() <= this.endDate();
  });
  protected readonly flightTypes: SelectOption[] = [
    {
      value: ONE_WAY_FLIGHT,
      text: 'one-way flight'
    },
    {
      value: RETURN_FLIGHT,
      text: 'return flight'
    }
  ];

  public setNewDate(signal: WritableSignal<Date>, event: Event) {
    const targetEl = event.target as HTMLInputElement;
    if (!targetEl.valueAsDate) {
      return;
    }

    signal.set(targetEl.valueAsDate);
  }

  public bookFlight() {
    const messageBase = 'You have booked a';
    const departureDateString = this.startDate().toLocaleDateString('en-gb');

    this.isOneWay() ?
      alert(`${messageBase} one-way flight on ${departureDateString}`) :
      alert(`${messageBase} return flight, departing on ${departureDateString} and returning on ${this.endDate().toLocaleDateString('en-gb')}`);
  }
}
