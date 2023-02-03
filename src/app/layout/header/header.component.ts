import { Component } from '@angular/core';


const usuario= ""

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})




export class HeaderComponent {
usuario: any= localStorage.getItem('userApi')



}
