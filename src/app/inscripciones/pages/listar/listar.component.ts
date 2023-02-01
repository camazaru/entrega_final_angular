import { Component, OnInit } from '@angular/core';
import { InscripcionesService  } from '../../../services/inscripciones/inscripciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  inscripcionesList: any[] | undefined;

  constructor( private api: InscripcionesService, private router:Router) {
   }

  ngOnInit(): void {
   
this.api.getAllInscripciones().subscribe( data => {

  this.inscripcionesList=data

})



}

nuevaInscripcion(){
  this.router.navigate(['/inscripciones/agregar'])
}


editarInscripcion(id:any){
  this.router.navigate(['/inscripciones/editar',id])
}

}