import {Directive, ElementRef, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[appRevert]'
})
export class RevertDirective implements OnInit {
  @Input('appRevert') text: string;

  constructor(private _element: ElementRef) { }


  ngOnInit () {
    console.log(this.text);
  }
}
