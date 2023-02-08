
import { ActionReducerMap } from "@ngrx/store"
import { estudiantesReducer } from "./reducers/alumnos.reducers"

export interface AppState {
items: any

}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    items: estudiantesReducer
}