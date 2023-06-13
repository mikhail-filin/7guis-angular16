import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTemperatureComponent } from './page-temperature.component';
import { FeatureWrapperComponent } from '../../feature-wrapper/feature-wrapper.component';
import { TemperatureConverterComponent } from '../../features/temperature-converter/temperature-converter.component';
import { FormsModule } from '@angular/forms';
import { SolutionWrapperComponent } from '../../solution-wrapper/solution-wrapper.component';

describe('PageTemperatureComponent', () => {
  let component: PageTemperatureComponent;
  let fixture: ComponentFixture<PageTemperatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        PageTemperatureComponent,
        FeatureWrapperComponent,
        TemperatureConverterComponent,
        SolutionWrapperComponent
      ]
    });
    fixture = TestBed.createComponent(PageTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
