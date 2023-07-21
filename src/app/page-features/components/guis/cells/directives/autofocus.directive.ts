import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[guisAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {
  public constructor(private elRef: ElementRef) {
  }

  public ngAfterViewInit(): void {
    this.elRef.nativeElement.focus();
  }
}
