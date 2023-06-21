import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleDrawerComponent } from './circle-drawer.component';

describe('CircleDrawerComponent', () => {
  let component: CircleDrawerComponent;
  let fixture: ComponentFixture<CircleDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleDrawerComponent]
    });
    fixture = TestBed.createComponent(CircleDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
