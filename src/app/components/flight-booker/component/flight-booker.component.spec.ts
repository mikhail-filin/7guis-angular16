import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightBookerComponent } from './flight-booker.component';
import { FormsModule } from '@angular/forms';

describe('FlightBookerComponent', () => {
  let component: FlightBookerComponent;
  let fixture: ComponentFixture<FlightBookerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [FlightBookerComponent]
    });
    fixture = TestBed.createComponent(FlightBookerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
