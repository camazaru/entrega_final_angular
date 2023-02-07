import { createAction, props } from '@ngrx/store';

 
export const loadItems = createAction(
    '[Estudiantes List] Cargando estudiantes'
 );
 
export const loadedItems:any = createAction(
'[Estudiantes List] Loaded Success',
props<{estudiantes:any}>()


)