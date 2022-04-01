import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fx-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css'],
})
export class LabelComponent implements OnInit {
  @Input() textType = '';
  @Input() textColor='black'
  @Input() alignCenter:boolean=false

  constructor() {}

  ngOnInit(): void {}
  // isTextCenter(){
  //   return this.alignCenter ? 'center-text':" ";
  // }
  getLabelClassProperties() {
    return  ' ' + this.textType ;
    
  }
}
