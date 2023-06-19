import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFeaturesComponent } from './page-features.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PageFeaturesRoutingModule } from './page-features-routing.module';
import { of } from 'rxjs';
import { FeatureData } from './models/feature-data.model';
import { ImplementationData } from './models/implementation-data.model';

describe('PageFeaturesComponent', () => {
  let component: PageFeaturesComponent;
  let fixture: ComponentFixture<PageFeaturesComponent>;
  const featureData: FeatureData[] = [
    {
      id: 'counter',
      title: 'Counter'
    }
  ];
  const implementationData: ImplementationData[] = [
    {
      id: 'counter',
      title: 'Counter',
      codeURL: ''
    }
  ];

  beforeEach(() => {
    const activatedRouteStub = {
      firstChild: {
        data: of({ featureData, implementationData })
      }
    };

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        PageFeaturesRoutingModule
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


  it('should get feature and implementation data from activated route on init', () => {
    expect(component.featureData)
      .withContext('feature data defined')
      .toBeDefined();
    expect(component.implementationData)
      .withContext('implementation data defined')
      .toBeDefined();
  });
});
