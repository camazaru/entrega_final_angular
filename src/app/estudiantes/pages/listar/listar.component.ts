import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from '../../../models/usuario.model';
import { AppState } from '../../../state/app.reducers';
import {cargarUsuarios } from '../../../state/actions/usuarios.actions';




@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{


  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor( private router: Router, private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select('usuarios').subscribe( ({ users, loading, error }) => {
      this.usuarios = users;
      this.loading  = loading;
      this.error    = error;
    });


    this.store.dispatch( cargarUsuarios() );


  }

  nuevoEstudiante(){
  this.router.navigate(['/estudiantes/agregar'])
}

editarEstudiante(id:any){
  this.router.navigate(['/estudiantes/editar',id])
}

}