import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },

  {
    path: 'estudiantes',
    loadChildren: () => import('./estudiantes/estudiantes.module').then(m => m.EstudiantesModule)
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'inscripciones',
    loadChildren: () => import('./inscripciones/inscripciones.module').then(m => m.InscripcionesModule)
  },

  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
  },

  {
    path: '**', redirectTo: 'home'
    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
