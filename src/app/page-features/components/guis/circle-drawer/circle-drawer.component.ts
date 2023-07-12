import { Component, signal, TemplateRef, ViewChild, ViewContainerRef, WritableSignal } from '@angular/core';
import { Circle } from './circle.model';
import { DEFAULT_RADIUS } from './circle-drawer.const';

@Component({
  selector: 'guis-circle-drawer',
  templateUrl: './circle-drawer.component.html',
  styleUrls: ['./circle-drawer.component.scss']
})
export class CircleDrawerComponent {
  @ViewChild('canvas', { read: ViewContainerRef }) canvas: ViewContainerRef | undefined;
  @ViewChild('circle') circleTemplate: TemplateRef<unknown> | undefined;

  public circles: WritableSignal<Circle[]> = signal([]);
  public selectedCircle: WritableSignal<Circle | null> = signal(null);

  public undoAction(): void {
  }

  public redoAction(): void {
  }

  public createCircle(event: MouseEvent): void {
    if (this.selectedCircle()) {
      this.resetSelection();
      return;
    }

    const newCircle: Circle = {
      cx: event.offsetX,
      cy: event.offsetY,
      r: DEFAULT_RADIUS
    };
    this.circles.mutate((val: Circle[]) => val.push(newCircle));
  }

  public showPopup(event: Event, circle: Circle): void {
    event.preventDefault();
    this.resetSelection();
    this.selectedCircle.set(circle);
  }

  public radiusChange(newRadius: number): void {
    const selectedCircle = this.selectedCircle();
    if (!selectedCircle) {
      return;
    }

    selectedCircle.r = newRadius;
  }

  private resetSelection() {
    this.selectedCircle.set(null);
  }
}
