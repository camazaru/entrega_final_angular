import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { PermissionsGuard } from '../guard/permissions.guard';

const routes: Routes = [

  { path: 'agregar', component: AgregarComponent, canActivate: [PermissionsGuard]},
  { path: 'listar', component: ListarComponent, canActivate: [PermissionsGuard]},
  { path: 'editar/:id', component: EditarComponent, canActivate: [PermissionsGuard]},
  { path: 'eliminar/:id', component: EditarComponent, canActivate: [PermissionsGuard]},
  
  { path: '**', component: ListarComponent, canActivate: [PermissionsGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
