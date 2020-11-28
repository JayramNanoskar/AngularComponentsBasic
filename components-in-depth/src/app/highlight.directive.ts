import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input("myColor") color = "yellow"; //accepting color else it is yellow

  constructor(private element: ElementRef) { //getting reference to dom element
   }

   @HostListener("mouseenter") //directive used to listen host element and then call mathod based on certain events
   addHighlight(){
    this.element.nativeElement.style.backgroundColor = this.color; //accessing dom element and applying style
   }

   @HostListener("mouseleave")
   removeHighlight(){
    this.element.nativeElement.style.backgroundColor = null; //reversing background color to original
   }
}
