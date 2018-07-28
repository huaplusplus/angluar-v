import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'v-toggle',
  styleUrls: ['./toggle.component.css'],
  templateUrl: './toggle.component.html'
})

export class ToggleComponent implements OnInit {
  @Input() value: boolean;
  @Input() disabled: boolean = false;
  @Input() fontSize: number = 25;
  @Output()
  change: EventEmitter<any> = new EventEmitter();
  curValue:boolean;



  constructor() {
  }

  ngOnInit() {
    this.curValue = !!this.value;
  }

  onToggle() {
    this.curValue = !this.curValue;
    this.change.emit(this.curValue);
  }


}


