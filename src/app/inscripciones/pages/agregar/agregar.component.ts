import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InscripcionesService } from '../../../services/inscripciones/inscripciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  formAdd: FormGroup;

  InscripcionesService: any;
  
  constructor(
    private api: InscripcionesService,
    private router: Router
    ) {
      this.formAdd= new FormGroup({
        curso: new FormControl(),
        alumno: new FormControl(),
        estatus: new FormControl(),
           
     })
    }

  ngOnInit(): void {
  }

  postForm(form: any){
    this.api.postInscripcion(form).subscribe(data => {
      this.router.navigate(['inscripciones/listar'])
        })
  }
 

  salir(){
    this.router.navigate(['/inscripciones/listar']);
  }
}