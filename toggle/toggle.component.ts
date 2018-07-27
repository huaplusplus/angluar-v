import {Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'v-toggle',
  styleUrls: ['./toggle.component.css'],
  templateUrl: './toggle.component.html'
})

export class ToggleComponent implements OnInit {
  @Input()
  iValue;
  @Output()
  toggle;


  curValue;


  constructor() {
  }

  ngOnInit() {
    this.curValue = this.iValue;
  }

  onToggle() {
    this.curValue = !this.curValue;
    this.toggle.emit(this.curValue);
  }


}


