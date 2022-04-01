import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fx-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  @Input() iconName=''
  @Input() iconWidth=''
  @Input() iconHeight=''

  constructor() { }

  ngOnInit(): void {
  }

}
