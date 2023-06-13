import { Component, Input } from '@angular/core';

@Component({
  selector: 'guis-solution-wrapper',
  templateUrl: './solution-wrapper.component.html',
  styleUrls: ['./solution-wrapper.component.scss']
})
export class SolutionWrapperComponent {
  @Input({ required: true }) title: string | undefined;
}
