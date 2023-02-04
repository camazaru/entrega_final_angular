import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = 'https://63d2b5531780fd6ab9cb4fd1.mockapi.io/'

  
  constructor(private http:HttpClient) { }




  postUser(form:any):Observable<any>{
    let direccion = this.url + "users" ;
    return this.http.post<any>(direccion, form)
  
   }

   getSingleUser(email: any): Observable<any>{
     
    let direccion= this.url + "users?email=" + email;
    return this.http.get<any>(direccion)
  }

 
}
