import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureWrapperComponent } from './feature-wrapper.component';

describe('FeatureWrapperComponent', () => {
  let component: FeatureWrapperComponent;
  let fixture: ComponentFixture<FeatureWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureWrapperComponent]
    });
    fixture = TestBed.createComponent(FeatureWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
