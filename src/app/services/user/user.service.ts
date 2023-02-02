import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = 'https://63d2b5531780fd6ab9cb4fd1.mockapi.io/'

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any[]> {
    let direccion = this.url + "users";
    return this.http.get<any[]>(direccion)
    }

    getSingleUser(id: any): Observable<any>{
      let direccion= this.url + "users?id=" + id;
      return this.http.get<any>(direccion)
    }

    postUser(form:any):Observable<any>{
      let direccion = this.url + "users" ;
      return this.http.post<any>(direccion, form)
    
     }

     putUser(form:any, userid:any):Observable<any>{
      let direccion = this.url + "users/" + userid
    return this.http.put<any>(direccion, form)
    
    }

    deleteUser(userid:any ):Observable<any>{
      let direccion = this.url + "users/" + userid
      return this.http.delete<any>(direccion, userid)
    }


}
