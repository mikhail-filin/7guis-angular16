import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let button: DebugElement;
  let input: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.css('#counterButton'));
    input = fixture.debugElement.query(By.css('#counterInput'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default value equal to 0', () => {
    expect(component.counter()).toEqual(0);
  });

  it('should contain increment button', () => {
    expect(button.nativeElement).toBeTruthy();
  });

  it('should contain input element', () => {
    expect(input.nativeElement).toBeTruthy();
  });

  it('should increment value by 1 on button click', () => {
    button.triggerEventHandler('click');
    fixture.detectChanges();
    expect(component.counter()).toEqual(1);
    expect(+input.nativeElement.value).toEqual(1);
  });
});
