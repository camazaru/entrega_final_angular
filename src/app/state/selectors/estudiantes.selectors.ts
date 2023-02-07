
import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";


export const selectItemsFeature = (state: AppState) => state.items;


export const selectListEstudiantes = createSelector (
    selectItemsFeature,
    (state: any) => state.items
);

export const selectLoading = createSelector (
    selectItemsFeature,
    (state: any) => state.loading
);