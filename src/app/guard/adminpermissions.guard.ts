import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminpermissionsGuard implements CanActivate {

  constructor(private router:Router){}

  checkAdmin(){
    if(sessionStorage.getItem('role')){
      
return true
    }else{
      this.router.navigate(['home'])
            return false
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkAdmin()
  }




 
  
}
