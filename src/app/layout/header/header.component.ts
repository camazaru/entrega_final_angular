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
userApi: any = localStorage.getItem('userApi')


  constructor(private cookiesServiceService: CookiesServiceService) {
    this.cookiesServiceService.userApi$.subscribe(data=> {
      this.userApi= data

      
  })

  }

  ngOnInit(): void {
  
    this.cookiesServiceService.userApi$.subscribe(data=> {
      this.userApi= data

      
  })
  
  
  }

  

}
