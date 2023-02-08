import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookiesServiceService } from '../../services/cookies/cookies-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  usuario: any = null;


  constructor(private cookiesServiceService: CookiesServiceService) {}

  ngOnInit(): void {
    this.cookiesServiceService.disparadorDeCookie.subscribe(data=> {
      this.usuario= data
     
       })

       this.cookiesServiceService.borrarCookie.subscribe(data=> {
        this.usuario= data
      
         })
  }

  

}
