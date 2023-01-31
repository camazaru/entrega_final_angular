import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  url:string = 'https://63d2b5531780fd6ab9cb4fd1.mockapi.io/'

  constructor(private http:HttpClient) { }

  getAllEstudiantes():Observable<any[]> {
    let direccion = this.url + "estudiantes";
    
      return this.http.get<any[]>(direccion)
    }

    getSingleEstudiante(id: any): Observable<any>{
      let direccion= this.url + "estudiantes?id=" + id;
      return this.http.get<any>(direccion)
    }

    postEstudiante(form:any):Observable<any>{
      let direccion = this.url + "estudiantes" ;
      return this.http.post<any>(direccion, form)
    
     }

     putEstudiante(form:any, estudianteid:any):Observable<any>{
      let direccion = this.url + "estudiantes/" + estudianteid
    return this.http.put<any>(direccion, form)
    
    }

    deleteEstudiante(estudianteid:any ):Observable<any>{
      let direccion = this.url + "estudiantes/" + estudianteid
     
      return this.http.delete<any>(direccion, estudianteid)
    }


}
