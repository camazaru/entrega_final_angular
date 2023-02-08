import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpermissionsGuard } from '../guard/adminpermissions.guard';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListarComponent } from './pages/listar/listar.component';

const routes: Routes = [
  {
    path: 'agregar',
    component: AgregarComponent,
    canActivate: [AdminpermissionsGuard],
  },
  {
    path: 'listar',
    component: ListarComponent,
    canActivate: [AdminpermissionsGuard],
  },
  {
    path: 'editar/:id',
    component: EditarComponent,
    canActivate: [AdminpermissionsGuard],
  },
  {
    path: 'eliminar/:id',
    component: EditarComponent,
    canActivate: [AdminpermissionsGuard],
  },
  {
    path: 'listar/:email',
    component: ListarComponent,
    canActivate: [AdminpermissionsGuard],
  },

  {
    path: '**',
    component: ListarComponent,
    canActivate: [AdminpermissionsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
