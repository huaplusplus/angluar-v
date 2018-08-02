import {Component, Input} from '@angular/core';

@Component({
  selector: 'v-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
  @Input() color: string = '#8b2f81';
}
