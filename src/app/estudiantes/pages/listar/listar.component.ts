import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EstudiantesService } from '../../../services/estudiantes/estudiantes.service';
import { loadedItems, loadItems } from '../../../state/actions/alumnos.actions';
import { selectListEstudiantes, selectLoading } from '../../../state/selectors/estudiantes.selectors';
import { estudiantesReducer } from '../../../state/reducers/alumnos.reducers';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  loadEstudiantes$:Observable<any>= new Observable()

  estudiantesList: any[] | undefined;

  constructor(private router:Router, private store: Store<any>){


  }

  ngOnInit(): void {
    this.loadEstudiantes$ = this.store.select(selectLoading)
this.store.dispatch(loadItems())
this.loadEstudiantes$ = this.store.select(selectListEstudiantes)


}

nuevoEstudiante(){
  this.router.navigate(['/estudiantes/agregar'])
}

editarEstudiante(id:any){
  this.router.navigate(['/estudiantes/editar',id])
}



}
