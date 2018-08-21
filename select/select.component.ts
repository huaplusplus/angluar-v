import {Component, Input} from '@angular/core';

@Component({
  selector: 'v-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})

export class SelectComponent {
  @Input() options = ['123', '456', '789'];
  ifList: boolean = false;

  onToggleList() {
    this.ifList = !this.ifList;
    console.log(`onToggleList this.ifList ${this.ifList}`);

  }


  onSelect($event, index) {
    this.ifList = false;

    // todo 为什么在父元素 ul上面进行拦截不行?
    $event.stopPropagation();
    console.log(`this.ifList ${this.ifList}`);
  }

}
