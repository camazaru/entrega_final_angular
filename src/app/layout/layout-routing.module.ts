import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from '../estudiantes/pages/agregar/agregar.component';
import { EditarComponent } from '../estudiantes/pages/editar/editar.component';
import { ListarComponent } from '../estudiantes/pages/listar/listar.component';

const routes: Routes = [

  { path: 'agregar', component: AgregarComponent},
  { path: 'listar', component: ListarComponent},
  { path: 'editar/:id', component: EditarComponent},
  { path: 'eliminar/:id', component: EditarComponent},
  
  { path: '**', component: ListarComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
