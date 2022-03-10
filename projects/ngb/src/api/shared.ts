import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngbTemplate]'
})
export class NgbTemplate {

  @Input() type!: string;

  @Input('ngbTemplate') name!: string;

  constructor(public template: TemplateRef<any>) { }

  getType(): string {
    return this.name;
  }

}

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  constructor(private elementRef: ElementRef) { }

  @Output() clickOutside = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}
