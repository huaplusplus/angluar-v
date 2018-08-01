import {Component, OnInit, Input, Output, Injector, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'v-toggle',
  styleUrls: ['./toggle.component.css'],
  templateUrl: './toggle.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ToggleComponent),
    multi: true,
  }]

})

export class ToggleComponent implements ControlValueAccessor {
  @Input() disabled: boolean = false;
  @Input() fontSize: number = 25;
  @Output()
  curValue: boolean;
  toggleChangeFn: Function;

  onToggle() {
    this.curValue = !this.curValue;
    this.toggleChangeFn(this.curValue);
  }

  writeValue(value) {
    this.curValue = value;
  }


  registerOnChange(fn: any) {
    this.toggleChangeFn = fn;
  }

  registerOnTouched(fn: any) {

  }

}


