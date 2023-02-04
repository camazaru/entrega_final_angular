import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})




export class HeaderComponent {
usuario:any = null
user:any="usuario"
data$:any
  
  
  

constructor(private router:Router, private api:AuthService){
  
}

ngOnInit(): void {
  
 
}



salir(){
  localStorage.removeItem('token');
  sessionStorage.removeItem('role');
  localStorage.removeItem('userApi')
  
  this.usuario = null
  this.router.navigate(['login'])
 }
}
