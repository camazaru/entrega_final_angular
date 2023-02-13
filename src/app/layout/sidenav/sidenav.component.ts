import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookiesServiceService } from '../../services/cookies/cookies-service.service';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit{

 userApi:any = localStorage.getItem('userApi')
 token:any= localStorage.getItem('token')
 role:any=sessionStorage.getItem('role')

constructor(private router: Router, private cookiesServiceService: CookiesServiceService) {
    
    this.cookiesServiceService.token$.subscribe(data=> {
      this.token= data

    
  })
  }

ngOnInit(): void {
  
  this.cookiesServiceService.token$.subscribe(data=> {
    this.token=data
        })

  this.cookiesServiceService.role$.subscribe(data =>
    this.role=data)     
    
      
        

}

  salir() {
    
    sessionStorage.removeItem('role');
    localStorage.removeItem('userApi');
    localStorage.removeItem('token')
    this.token= null
    this.role=null
   
   

    this.cookiesServiceService.token$.subscribe("token")
    this.cookiesServiceService.role$.subscribe("role")
    this.cookiesServiceService.userApi$.emit("")
   
    this.router.navigate(['home']);
  }

  
  
}
