import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InscripcionesService {
  url: string = 'https://63d2b5531780fd6ab9cb4fd1.mockapi.io/';

  constructor(private http: HttpClient) {}

  getAllInscripciones(): Observable<any[]> {
    let direccion = this.url + 'inscripciones';

    return this.http.get<any[]>(direccion);
  }

  getSingleInscripcion(id: any): Observable<any> {
    let direccion = this.url + 'inscripciones?id=' + id;
    return this.http.get<any>(direccion);
  }

  postInscripcion(form: any): Observable<any> {
    let direccion = this.url + 'inscripciones';
    return this.http.post<any>(direccion, form);
  }

  putInscripcion(form: any, inscripcionid: any): Observable<any> {
    let direccion = this.url + 'inscripciones/' + inscripcionid;
    return this.http.put<any>(direccion, form);
  }

  delete(inscripcionid: any): Observable<any> {
    let direccion = this.url + 'inscripciones/' + inscripcionid;

    return this.http.delete<any>(direccion, inscripcionid);
  }
}
