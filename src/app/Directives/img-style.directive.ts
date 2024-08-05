import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appImgStyle]',
  standalone: true
})
export class ImgStyleDirective implements OnChanges{

@Input() borderRadius1:string="20px";
@Input('appImgStyle') borderRadius2:string="10px";
  // document.getEle
  constructor(private elementref: ElementRef) {

    // this.elementref.nativeElement.style.border='2px solid green'
    // this.elementref.nativeElement.style.border=`2px solid ${this.border2}`

  }
  ngOnChanges(): void {
    this.elementref.nativeElement.style.borderRadius=` ${this.borderRadius1}`

  }
// events

// method decorator
 @HostListener('mouseover') func1(){
  // this.elementref.nativeElement.style.border=`5px dashed ${this.border1} `
  this.elementref.nativeElement.style.borderRadius=`${this.borderRadius2} `
  this.elementref.nativeElement.style.opacity=.8;
 }
 @HostListener('mouseout') func2(){
  // this.elementref.nativeElement.style.border=`2px solid ${this.border2}`
  this.elementref.nativeElement.style.borderRadius=`${this.borderRadius1}`
  this.elementref.nativeElement.style.opacity=1;


 }
}
