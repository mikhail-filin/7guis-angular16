import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TemperatureConverterComponent } from './temperature-converter.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TemperatureConverterComponent', () => {
  let component: TemperatureConverterComponent;
  let fixture: ComponentFixture<TemperatureConverterComponent>;
  let celsiusInput: DebugElement;
  let fahrenheitInput: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureConverterComponent],
      imports: [
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(TemperatureConverterComponent);
    component = fixture.componentInstance;
    celsiusInput = fixture.debugElement.query(By.css('#celsius'));
    fahrenheitInput = fixture.debugElement.query(By.css('#fahrenheit'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an input for celsius value', () => {
    expect(celsiusInput.nativeElement).toBeTruthy();
  });

  it('should contain an input for fahrenheit value', () => {
    expect(fahrenheitInput.nativeElement).toBeTruthy();
  });

  it('should change fahrenheit value when celsius value changes', fakeAsync(() => {
    celsiusInput.nativeElement.value = 0;
    celsiusInput.triggerEventHandler('input', { target: celsiusInput.nativeElement });

    fixture.detectChanges();
    tick();

    expect(fahrenheitInput.nativeElement.value).toEqual('32');
  }));

  it('should correctly change fahrenheit value when celsius value is negative', fakeAsync(() => {
    celsiusInput.nativeElement.value = -10;
    celsiusInput.triggerEventHandler('input', { target: celsiusInput.nativeElement });

    fixture.detectChanges();
    tick();

    expect(fahrenheitInput.nativeElement.value).toEqual('14');
  }));

  it('should change celsius value when fahrenheit values changes', fakeAsync(() => {
    fahrenheitInput.nativeElement.value = 0;
    fahrenheitInput.triggerEventHandler('input', { target: fahrenheitInput.nativeElement });

    fixture.detectChanges();
    tick();

    expect(celsiusInput.nativeElement.value).toEqual('-17.78');
  }));

  it('should correctly change celsius value when fahrenheit value is negative', fakeAsync(() => {
    fahrenheitInput.nativeElement.value = -10;
    fahrenheitInput.triggerEventHandler('input', { target: fahrenheitInput.nativeElement });

    fixture.detectChanges();
    tick();

    expect(celsiusInput.nativeElement.value).toEqual('-23.33');
  }));
});
