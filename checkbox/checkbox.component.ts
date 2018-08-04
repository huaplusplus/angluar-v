import {Component, Input, forwardRef, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'v-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true,
  }]
})

export class CheckboxComponent implements OnInit {
  @Input() fontSize = 14;
  @Input() color = '#3d70b2';
  @Input() disabled = false;

  value = null;
  hovered = false;
  borderColor;
  rightMarkColor;
  halfRectColor;
  BLACK_COLOR = '#000';
  checkChangeFn;


  ngOnInit() {
    if (this.color === 'transparent') {
      this.borderColor = this.BLACK_COLOR;
      this.rightMarkColor = this.BLACK_COLOR;
      this.halfRectColor = this.BLACK_COLOR;
    } else {
      this.borderColor = this.color;
      this.halfRectColor = this.color;
      this.rightMarkColor = '#fafafa';
    }

  }

  writeValue(value) {
    this.value = value;
  }

  registerOnChange(fn) {
    this.checkChangeFn = fn;
  }

  registerOnTouched() {

  }

  onClickCheck() {
    if (this.value === false || this.value === null) {
      this.value = true;
    } else if (this.value === true) {
      this.value = false;
    }
    this.checkChangeFn(this.value);
  }

}
