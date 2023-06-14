import { Component, Input } from '@angular/core';
import { FeatureData } from '../../../models/feature-data.model';
import { ImplementationData } from '../../../models/implementation-data.model';

@Component({
  selector: 'guis-page-flight-booker',
  templateUrl: './page-flight-booker.component.html',
  styleUrls: ['./page-flight-booker.component.scss']
})
export class PageFlightBookerComponent {
  @Input() public featureData: FeatureData | undefined;
  @Input() public implementationData: ImplementationData | undefined;
}
