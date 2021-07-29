import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appReplaceText]'
})
export class ReplaceTextDirective {
  @Input('appReplaceText') value: any;
  constructor(private elementRef: ElementRef) {
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.elementRef.nativeElement.innerText = this.value;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.elementRef.nativeElement.innerText = 'Hover me!';
  }

}
