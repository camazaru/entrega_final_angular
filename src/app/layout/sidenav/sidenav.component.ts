import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  constructor(private router:Router){}

  salir(){
   localStorage.removeItem('token');
   sessionStorage.removeItem('role');
   this.router.navigate(['home'])

  }



  
}

