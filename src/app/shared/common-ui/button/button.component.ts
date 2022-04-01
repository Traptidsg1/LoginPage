import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() buttonType = 'primary';
  @Input() buttonHover = false;
  @Input() roundedButton = false;

  

  constructor() {}

  ngOnInit(): void {}

  getCssProperties() {
    let className = this.buttonType;
    className += this.hoverClass()
    className += this.addRoundedButtonClass();
    return className;
  }

  hoverClass() {
   return  this.buttonHover ? ' hover-on ' : ' ';
  }

  addRoundedButtonClass() {
   return  this.roundedButton ? ' rounded-button ' : ' ';
  }
}
