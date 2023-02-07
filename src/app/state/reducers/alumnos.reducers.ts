import { createReducer, on, State } from '@ngrx/store';
import { loadItems, loadedItems } from '../actions/alumnos.actions';

export const initialState:any = { loading: false, estudiantes: []}

export const estudiantesReducer = createReducer (
initialState,
on(loadItems, (state) => {
return {...state, loading:true}

}),
on(loadedItems, (state, {estudiantes}) => {

    return {...state, loading:false, estudiantes}
    
    })

)

