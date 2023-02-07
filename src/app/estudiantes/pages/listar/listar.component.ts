import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EstudiantesService } from '../../../services/estudiantes/estudiantes.service';
import { loadedItems, loadItems } from '../../../state/actions/alumnos.actions';
import { selectLoading } from '../../../state/selectors/estudiantes.selectors';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  loading$:Observable<any>= new Observable()

  estudiantesList: any[] | undefined;

  constructor(private api:EstudiantesService, private router:Router, private store: Store<any>){

  }

  ngOnInit(): void {
this.loading$ = this.store.select(selectLoading)

this.store.dispatch(loadItems())

    this.api.getAllEstudiantes().subscribe( data => {

      this.estudiantesList=data



      this.store.dispatch(loadedItems(
        {estudiantes: data}
      ));
    })
}

nuevoEstudiante(){
  this.router.navigate(['/estudiantes/agregar'])
}

editarEstudiante(id:any){
  this.router.navigate(['/estudiantes/editar',id])
}
}
