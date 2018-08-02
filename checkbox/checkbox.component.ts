import {Component, Input} from '@angular/core';

@Component({
  selector: 'v-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})

export class CheckboxComponent {
  @Input() fontSize = 8;
  @Input() color = 'orange';
  @Input() disabled = false;
  @Input() text = '';
  value = null;
  hovered = false;

  onClickCheck() {
    if (this.value === false || this.value === null) {
      this.value = true;
    } else if (this.value === true) {
      this.value = false;
    }
  }

}
