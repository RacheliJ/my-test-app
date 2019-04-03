import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSpecialCharacter]'
})
export class SpecialCharacterDirective {

  regexStr = '^[0-9a-zA-Z#]$';
  @Input() isAlphaNumeric: boolean;

  constructor(private el: ElementRef) { }


  @HostListener('keypress', ['$event']) onKeyPress(event) {
    return new RegExp(this.regexStr).test(event.key);
  }

  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
    this.validateFields(event);
  }

  validateFields(event) {
    setTimeout(() => {

      let res: string = "";
      let matches: string[] = this.el.nativeElement.value.match(this.regexStr);
      if (matches)
        res = matches.join("");
      this.el.nativeElement.value = res;
      event.preventDefault();

    }, 0)
  }

}
