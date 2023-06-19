import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { FlightBookerComponent } from './flight-booker.component';
import { FormsModule } from '@angular/forms';
import { ONE_WAY_FLIGHT, RETURN_FLIGHT } from './flight-types.const';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FlightBookerComponent', () => {
  let component: FlightBookerComponent;
  let fixture: ComponentFixture<FlightBookerComponent>;
  let debugElement: DebugElement;

  const dropdownId = '#selectedFlightTypeSelect';
  const startDateId = '#startDateInput';
  const endDateId = '#endDateInput';
  const buttonId = '#bookFlightButton';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [FlightBookerComponent]
    });

    fixture = TestBed.createComponent(FlightBookerComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should create dropdown, two datepickers and a button in the template', () => {
    const dropdown = debugElement.query(By.css(dropdownId));
    expect(dropdown)
      .withContext('dropdown exists')
      .toBeDefined();

    const startDate = debugElement.query(By.css(startDateId));
    expect(startDate)
      .withContext('start date input exists')
      .toBeDefined();

    const endDate = debugElement.query(By.css(endDateId));
    expect(endDate)
      .withContext('end date input exists')
      .toBeDefined();

    const bookButton = debugElement.query(By.css(buttonId));
    expect(bookButton)
      .withContext('book button exists')
      .toBeDefined();
  })

  it('should initialize start date with current date', () => {
    const startDateInput = debugElement.query(By.css(startDateId));
    const currDate = new Date();
    currDate.setHours(0, 0, 0, 0);
    const startDateValue = startDateInput.nativeElement.valueAsDate;
    startDateValue.setHours(0, 0, 0, 0);

    expect(startDateValue).toEqual(currDate);
  });

  it('should initialize end date with current date', () => {
    const endDateInput = debugElement.query(By.css(endDateId));
    const currDate = new Date();
    currDate.setHours(0, 0, 0, 0);
    const endDateValue = endDateInput.nativeElement.valueAsDate;
    endDateValue.setHours(0, 0, 0, 0);

    expect(endDateValue).toEqual(currDate);
  });

  it('should have one-way flight selected initially', () => {
    expect(component.selectedFlightType())
      .withContext('internal value equal to one way flight')
      .toEqual(ONE_WAY_FLIGHT);

    const dropdown = debugElement.query(By.css(dropdownId));

    fixture.whenStable().then(() => {
      expect(dropdown.nativeElement.value)
        .withContext('dropdown value equal to one way flight')
        .toEqual(ONE_WAY_FLIGHT);
    })
  });

  it('should have end date disabled by default', () => {
    const endDate = debugElement.query(By.css(endDateId));
    expect(endDate.nativeElement.disabled).toBeTruthy();
  });

  it('should enable/disable end date input according to dropdown changes', fakeAsync(() => {
    const dropdown = debugElement.query(By.css(dropdownId));
    const endDate = debugElement.query(By.css(endDateId));

    dropdown.nativeElement.value = RETURN_FLIGHT;
    dropdown.triggerEventHandler('change', { target: dropdown.nativeElement });
    tick();
    fixture.detectChanges();
    expect(endDate.nativeElement.disabled)
      .withContext('return flight should enable end date input')
      .toBeFalsy();

    dropdown.nativeElement.value = ONE_WAY_FLIGHT;
    dropdown.triggerEventHandler('change', { target: dropdown.nativeElement });
    tick();
    fixture.detectChanges();
    expect(endDate.nativeElement.disabled)
      .withContext('one way flight should disable end date input')
      .toBeTruthy();
  }));

  it('should not change date value if new date is null', fakeAsync(() => {
    const startDate = debugElement.query(By.css(startDateId));
    const currDate = new Date();
    component.startDate.set(currDate);

    startDate.nativeElement.valueAsDate = null;
    startDate.triggerEventHandler('change', { target: startDate.nativeElement });
    tick();
    fixture.detectChanges()

    expect(component.startDate()).toEqual(currDate);
  }));

  it('book flight button should be disabled if end date is before start date', fakeAsync(() => {
    const dropdown = fixture.debugElement.query(By.css(dropdownId));
    const startDateInput = fixture.debugElement.query(By.css(startDateId));
    const endDateInput = fixture.debugElement.query(By.css(endDateId));
    const bookButton = fixture.debugElement.query(By.css(buttonId));
    const currDate = new Date();

    dropdown.nativeElement.value = RETURN_FLIGHT;
    dropdown.triggerEventHandler('change', { target: dropdown.nativeElement });
    endDateInput.nativeElement.valueAsDate = currDate;
    endDateInput.triggerEventHandler('change', { target: endDateInput.nativeElement });
    currDate.setDate(currDate.getDate() + 1);
    startDateInput.nativeElement.valueAsDate = currDate;
    startDateInput.triggerEventHandler('change', { target: startDateInput.nativeElement });

    tick();
    fixture.detectChanges();

    expect(bookButton.nativeElement.disabled)
      .withContext('start date > end date disabling button')
      .toBeTruthy();

    startDateInput.nativeElement.valueAsDate = new Date();
    startDateInput.triggerEventHandler('change', { target: startDateInput.nativeElement });
    tick();
    fixture.detectChanges();
    expect(bookButton.nativeElement.disabled)
      .withContext('start date < end date enabling button')
      .toBeFalsy();
  }));

  it('should show a message for one-way flights when user click on booking button', () => {
    component.selectedFlightType.set(ONE_WAY_FLIGHT);

    const bookButton = fixture.debugElement.query(By.css(buttonId));
    const spy = spyOn(window, 'alert');
    const startDate = component.startDate().toLocaleDateString('en-gb');
    const expectedMessage = `You have booked a one-way flight on ${startDate}`;

    bookButton.triggerEventHandler('click', {});
    expect(spy).toHaveBeenCalledWith(expectedMessage);
  });

  it('should show a message for return flights when user click on booking button', () => {
    component.selectedFlightType.set(RETURN_FLIGHT);

    const bookButton = fixture.debugElement.query(By.css(buttonId));
    const spy = spyOn(window, 'alert');
    const startDate = component.startDate().toLocaleDateString('en-gb');
    const endDate = component.endDate().toLocaleDateString('en-gb');
    const expectedMessage = `You have booked a return flight, departing on ${startDate} and returning on ${endDate}`;

    bookButton.triggerEventHandler('click', {});
    expect(spy).toHaveBeenCalledWith(expectedMessage);
  });
});
