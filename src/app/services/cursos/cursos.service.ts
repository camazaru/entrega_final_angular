import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  url: string = 'https://63d2b5531780fd6ab9cb4fd1.mockapi.io/';

  constructor(private http: HttpClient) {}

  getAllCursos(): Observable<any[]> {
    let direccion = this.url + 'cursos';

    return this.http.get<any[]>(direccion);
  }

  getSingleCurso(id: any): Observable<any> {
    let direccion = this.url + 'cursos?id=' + id;
    return this.http.get<any>(direccion);
  }

  postCurso(form: any): Observable<any> {
    let direccion = this.url + 'cursos';
    return this.http.post<any>(direccion, form);
  }

  putCurso(form: any, cursoid: any): Observable<any> {
    let direccion = this.url + 'cursos/' + cursoid;
    return this.http.put<any>(direccion, form);
  }

  delete(cursoid: any): Observable<any> {
    let direccion = this.url + 'cursos/' + cursoid;

    return this.http.delete<any>(direccion, cursoid);
  }
}
