import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

    @Input() defaultColor = 'white';
    @Input() highlightColor = 'green';
    @HostListener('mouseenter') mouseover(){
        this.backgroundColor = this.highlightColor;
    };

    @HostListener('mouseout') mouseleave(){
        this.backgroundColor = this.defaultColor;
    };
    @HostBinding('style.backgroundColor') get setColor() {
       return this.backgroundColor;
    }
    private backgroundColor:string;
    constructor(private elementRef: ElementRef, private renderer : Renderer) { 
    
    //only works in browser.
    //this.elementRef.nativeElement.style.backgroundColor = 'green';

    //this.renderer.setElementStyle(elementRef.nativeElement, 'backgroundColor', 'green');
}

    // ngOnInit is only reached after all bound properties are initialized.
    ngOnInit(){
        this.backgroundColor = this.defaultColor;
    }

}
