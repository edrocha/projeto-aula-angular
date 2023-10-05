import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
listas = [
     {label:'Home',url:'/',logo:'home.png'},
     {label:'app-Input',url:'/frm-input',logo:'input.png'},
     {label:'app-Menu',url:'/frm-menu',logo:'menu.png'},
     {label:'app-Number',url:'/frm-number',logo:'input.png'},
     {label:'app-title',url:'/frm-title',logo:'title.png'}
]
}




