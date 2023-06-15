import { Component, Input } from '@angular/core';
import { ImplementationData } from '../../../models/implementation-data.model';

@Component({
  selector: 'guis-solution-wrapper',
  templateUrl: './solution-wrapper.component.html',
  styleUrls: ['./solution-wrapper.component.scss']
})
export class SolutionWrapperComponent {
  @Input({ required: true }) implementationData: ImplementationData | undefined;
}
