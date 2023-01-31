import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudiantesService } from '../../../services/estudiantes/estudiantes.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  estudiantesList: any[] | undefined;

  constructor(private api:EstudiantesService, private router:Router){

  }

  ngOnInit(): void {
    this.api.getAllEstudiantes().subscribe( data => {

      this.estudiantesList=data
    })
}

nuevoEstudiante(){
  this.router.navigate(['/estudiantes/agregar'])
}

editarEstudiante(id:any){
  this.router.navigate(['/estudiantes/editar',id])
}
}
