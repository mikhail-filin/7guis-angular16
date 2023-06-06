import { Component, Input } from '@angular/core';
import { FeatureData } from '../../../models/feature-data.model';

@Component({
  selector: 'guis-page-counter',
  templateUrl: './page-counter.component.html',
  styleUrls: ['./page-counter.component.scss']
})
export class PageCounterComponent {
  @Input() public featureData: FeatureData | undefined;
}
