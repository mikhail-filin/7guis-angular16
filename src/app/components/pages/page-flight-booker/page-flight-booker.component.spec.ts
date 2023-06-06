import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFlightBookerComponent } from './page-flight-booker.component';
import { FeatureWrapperComponent } from '../../feature-wrapper/feature-wrapper.component';
import { FlightBookerComponent } from '../../features/flight-booker/flight-booker.component';
import { FormsModule } from '@angular/forms';

describe('PageFlightBookerComponent', () => {
  let component: PageFlightBookerComponent;
  let fixture: ComponentFixture<PageFlightBookerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [PageFlightBookerComponent, FeatureWrapperComponent, FlightBookerComponent]
    });
    fixture = TestBed.createComponent(PageFlightBookerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
