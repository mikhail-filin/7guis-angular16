import { Component, Input } from '@angular/core';
import { FeatureData } from './models/feature-data.model';
import { ImplementationData } from './models/implementation-data.model';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'guis-page-features',
  templateUrl: './page-features.component.html',
  styleUrls: ['./page-features.component.scss']
})
export class PageFeaturesComponent {
  @Input() public featureData: FeatureData | undefined;
  @Input() public implementationData: ImplementationData | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.firstChild?.data
    .pipe(takeUntilDestroyed())
    .subscribe((data) => {
      this.featureData = data['featureData'];
      this.implementationData = data['implementationData'];
    });
  }
}
