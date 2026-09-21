import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]', //för att kunna skriva <input appHighlight>
})
export class Highlight {
  constructor(private el: ElementRef) { } // för att referera det specifika elementet

  @HostListener('focus') onFocus() { //fokus när man går in i fältet
    this.highlight('yellow');
}
  @HostListener('blur')onBlur() {
    this.highlight('');

} 
private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
}
