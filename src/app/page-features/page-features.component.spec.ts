import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFeaturesComponent } from './page-features.component';
import { FeatureWrapperComponent } from './components/wrappers/feature-wrapper/feature-wrapper.component';
import { FormsModule } from '@angular/forms';
import { SolutionWrapperComponent } from './components/wrappers/solution-wrapper/solution-wrapper.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PageFeaturesRoutingModule } from './page-features-routing.module';

describe('PageFeaturesComponent', () => {
  let component: PageFeaturesComponent;
  let fixture: ComponentFixture<PageFeaturesComponent>;

  const activatedRouteStub = {
    firstChild: {
      data: new Observable()
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        PageFeaturesRoutingModule
      ],
      declarations: [
        PageFeaturesComponent,
        FeatureWrapperComponent,
        SolutionWrapperComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(PageFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
