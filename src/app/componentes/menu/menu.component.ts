import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
listas = [
     {label:'Home',url:'/',logo:'home.png'},
     {label:'Input',url:'frm-input',logo:'input.png'},
     {label:'Menu',url:'/frm-Menu',logo:'menu.png'},
     {label:'Number',url:'/frm-number',logo:'input.png'},
     {label:'Title',url:'/frm-title',logo:'title.png'}
]
}




