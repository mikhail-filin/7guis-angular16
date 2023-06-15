import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFeaturesComponent } from './page-features.component';
import { FeatureWrapperComponent } from './components/wrappers/feature-wrapper/feature-wrapper.component';
import { CounterComponent } from './components/guis/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { SolutionWrapperComponent } from './components/wrappers/solution-wrapper/solution-wrapper.component';

describe('PageCounterComponent', () => {
  let component: PageFeaturesComponent;
  let fixture: ComponentFixture<PageFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        PageFeaturesComponent,
        FeatureWrapperComponent,
        CounterComponent,
        SolutionWrapperComponent
      ],
    });
    fixture = TestBed.createComponent(PageFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
