import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EstudiantesService } from 'src/app/services/estudiantes/estudiantes.service';

 
@Injectable()
export class EstudiantesEffects {
 
  loadEstudiantes$ = createEffect(() => this.actions$.pipe(
    ofType('[Estudiantes List] Cargando estudiantes'),
    mergeMap(() => this.estudiantesService.getAllEstudiantes()
      .pipe(
        map(estudiantes => ({ type: '[Estudiantes List] Loaded Success', estudiantes })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private estudiantesService: EstudiantesService
  ) {}
}