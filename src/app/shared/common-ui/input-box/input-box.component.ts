import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {
  @Input() inputType=""
  @Input() placeHolder=""
  @Input() headerText=""

  constructor() { }



}
