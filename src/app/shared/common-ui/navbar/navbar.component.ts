import { Component, Input } from '@angular/core';
import { NavigationEnd, Router, NavigationStart} from '@angular/router';

@Component({
  selector: 'fx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

showNavMenus:boolean=true;
toggleMenu=false;

  constructor(private router:Router) 
  {
this.router.events.subscribe((event:any)=>{
  if(event instanceof NavigationEnd){
    console.log('Hi');
    if(this.router.url==='/' || this.router.url==='/login'){
      this.showNavMenus=true;
    }
    else{
      this.showNavMenus=false
    }
  }
})
   }

toggleMenuBar(){
  this.toggleMenu=!this.toggleMenu
}
getClassForToggleMenu(){
  return this.toggleMenu ? 'show-mobile-menu':'hide-mobile-menu'
}
}
