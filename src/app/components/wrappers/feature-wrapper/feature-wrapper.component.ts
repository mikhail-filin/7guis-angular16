import { Component, Input } from '@angular/core';
import { FeatureData } from '../../../models/feature-data.model';

@Component({
  selector: 'guis-feature-wrapper',
  templateUrl: './feature-wrapper.component.html',
  styleUrls: ['./feature-wrapper.component.scss']
})
export class FeatureWrapperComponent {
  @Input({ required: true }) featureData: FeatureData | undefined;
}
