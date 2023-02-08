import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions/usuarios.actions'
import { mergeMap, map, catchError } from 'rxjs/operators';
import { EstudiantesService } from 'src/app/services/estudiantes/estudiantes.service';
import { of } from 'rxjs';


 

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        private estudiantesService: EstudiantesService
    ){}


    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType( usuariosActions.cargarUsuarios ),
            mergeMap(
                () => this.estudiantesService.getAllEstudiantes()
                    .pipe(
                        map( users => usuariosActions.cargarUsuariosSuccess({ usuarios: users }) ),
                        catchError( err => of(usuariosActions.cargarUsuariosError({ payload: err })) )
                    )
            )
        )
    );

}