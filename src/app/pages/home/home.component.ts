import { Component} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'fx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router) { }
validateHome(){
  this.router.navigate(['/home'])
}
 
}
