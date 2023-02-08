import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookiesServiceService } from '../../services/cookies/cookies-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit{
  userApi: any = '';
  usuario: any = null;
 
  constructor(private router: Router, private cookiesServiceService: CookiesServiceService) {

    this.cookiesServiceService.disparadorDeCookie.subscribe(data=> {
      this.usuario= data

  })}

ngOnInit(): void {
  
}

  salir() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('role');
    localStorage.removeItem('userApi');
    this.cookiesServiceService.borrarCookie.emit(this.userApi)
    this.usuario=null
    this.router.navigate(['home']);
  }

  
  
}
