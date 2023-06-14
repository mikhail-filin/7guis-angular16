import { Component, Input } from '@angular/core';
import { FeatureData } from '../../../models/feature-data.model';
import { ImplementationData } from '../../../models/implementation-data.model';

@Component({
  selector: 'guis-page-temperature',
  templateUrl: './page-temperature.component.html',
  styleUrls: ['./page-temperature.component.scss']
})
export class PageTemperatureComponent {
  @Input() public featureData: FeatureData | undefined;
  @Input() public implementationData: ImplementationData | undefined;
}
