import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverBorder]'
})
export class HoverBorderDirective {
  @Input('appHoverBorder') borderColor = '#000';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.border = `2px solid ${this.borderColor}`;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.border = 'none';
  }
}
