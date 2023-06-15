import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFeatureComponent } from './page-feature.component';
import { FeatureWrapperComponent } from '../../wrappers/feature-wrapper/feature-wrapper.component';
import { CounterComponent } from '../../features/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { SolutionWrapperComponent } from '../../wrappers/solution-wrapper/solution-wrapper.component';

describe('PageCounterComponent', () => {
  let component: PageFeatureComponent;
  let fixture: ComponentFixture<PageFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        PageFeatureComponent,
        FeatureWrapperComponent,
        CounterComponent,
        SolutionWrapperComponent
      ],
    });
    fixture = TestBed.createComponent(PageFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
