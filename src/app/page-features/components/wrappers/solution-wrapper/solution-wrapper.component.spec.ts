import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionWrapperComponent } from './solution-wrapper.component';

describe('SolutionWrapperComponent', () => {
  let component: SolutionWrapperComponent;
  let fixture: ComponentFixture<SolutionWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionWrapperComponent]
    });
    fixture = TestBed.createComponent(SolutionWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
