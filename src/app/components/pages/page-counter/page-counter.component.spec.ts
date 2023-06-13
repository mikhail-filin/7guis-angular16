import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCounterComponent } from './page-counter.component';
import { FeatureWrapperComponent } from '../../feature-wrapper/feature-wrapper.component';
import { CounterComponent } from '../../features/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { SolutionWrapperComponent } from '../../solution-wrapper/solution-wrapper.component';

describe('PageCounterComponent', () => {
  let component: PageCounterComponent;
  let fixture: ComponentFixture<PageCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        PageCounterComponent,
        FeatureWrapperComponent,
        CounterComponent,
        SolutionWrapperComponent
      ],
    });
    fixture = TestBed.createComponent(PageCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
