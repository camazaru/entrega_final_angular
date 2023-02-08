import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookiesServiceService } from '../../services/cookies/cookies-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  userApi: any = '';

  constructor(private router: Router, private cookiesServiceService: CookiesServiceService) {}

  salir() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('role');
    localStorage.removeItem('userApi');
    this.cookiesServiceService.borrarCookie.emit(this.userApi)
    this.router.navigate(['home']);
  }
}
