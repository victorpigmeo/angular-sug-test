import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAppHighlightCat]'
})
export class AppHighlightCatDirective {

  @Input() color: string;

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = null;
  }

}
