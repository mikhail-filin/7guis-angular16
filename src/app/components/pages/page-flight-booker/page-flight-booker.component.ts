import { Component, Input } from '@angular/core';
import { FeatureData } from '../../../models/feature-data.model';

@Component({
  selector: 'guis-page-flight-booker',
  templateUrl: './page-flight-booker.component.html',
  styleUrls: ['./page-flight-booker.component.scss']
})
export class PageFlightBookerComponent {
  @Input() public featureData: FeatureData | undefined;
}
