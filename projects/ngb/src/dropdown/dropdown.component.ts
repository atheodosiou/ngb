import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, HostListener, ElementRef, forwardRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export const DROPDOWN_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgbDropdownComponent),
  multi: true
};

@Component({
  selector: 'ngb-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('overlayAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scaleY(0.8)' }),
        animate('{{showTransitionParams}}')
      ]),
      transition(':leave', [
        animate('{{hideTransitionParams}}', style({ opacity: 0 }))
      ])
    ])
  ],
  providers: [DROPDOWN_VALUE_ACCESSOR]
})
export class NgbDropdownComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {

  selected!: any;
  oppened: boolean = false;
  disabled: boolean = false;
  searchForm!: FormGroup;
  optionsTmp!: any[];

  onModelChange: Function = (value: any) => { };
  onModelTouched: Function = () => { };

  private searchSubscription: Subscription[] = [];

  @Input() id!: string;
  @Input() showClear: boolean = false;
  @Input() placeholder: string = 'Select one from list';
  @Input() options!: any[];
  @Input() optionLabel: string = 'label';
  @Input() optionValue: string = 'value';
  @Input() showTransitionOptions: string = '.12s cubic-bezier(0, 0, 0.2, 1)';
  @Input() hideTransitionOptions: string = '.1s linear';
  @Input() maxPanelScrollHeight: string = '200px';
  @Input() filter: boolean = false;
  @Input() filterPlaceholder: string = 'Search in the list';
  @Input() emptyFilterMessage: string = 'No entries found';

  constructor(private elementRef: ElementRef, private fb: FormBuilder) { }

  writeValue(value: any): void {
    this.selected = this.options.find(x => x === value);
    this.onModelChange(this.selected ? this.selected[this.optionValue] : null);
    this.onModelTouched();
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }

  setDisabledState(val: boolean): void {
    this.disabled = val;
  }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.oppened = false;
    }
  }

  ngAfterViewInit(): void {
    if (this.filter) {
      this.searchForm = this.fb.group({
        searchTerm: []
      });

      this.optionsTmp = JSON.parse(JSON.stringify(this.options));
      console.log(this.optionsTmp);
      let subscription = this.searchForm.get('searchTerm')?.valueChanges.pipe(
        debounceTime(300)
      ).subscribe(value => {
        if (value !== '') {
          this.options = this.options.filter(x => x[this.optionLabel].includes(value));
        } else {
          this.options = JSON.parse(JSON.stringify(this.optionsTmp));
        }
      });

      this.searchSubscription.push(subscription as Subscription);
    }
  }

  identify(index: number, item: any) {
    return item.label;
  }

  ngOnDestroy(): void {
    if (this.searchSubscription.length > 0) {
      this.searchSubscription.forEach(s => s.unsubscribe());
    }
  }
}
