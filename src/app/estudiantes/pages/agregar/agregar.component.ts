import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudiantesService } from '../../../services/estudiantes/estudiantes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})


export class AgregarComponent implements OnInit {

  formAdd: FormGroup;

  EstudiantesService: any;
  
  constructor(
    private api: EstudiantesService,
    private router: Router
    ) {
      this.formAdd= new FormGroup({
        nombre: new FormControl(),
        correo: new FormControl(),
        imagen: new FormControl(),
        activo: new FormControl(),
        
     })
    }

  ngOnInit(): void {
  }

  postForm(form: any){
    this.api.postEstudiante(form).subscribe(data => {
      this.router.navigate(['estudiantes/listar'])
        })
  }
 

  salir(){
    this.router.navigate(['/estudiantes/listar']);
  }


}