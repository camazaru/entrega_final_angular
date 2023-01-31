import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    private router: Router,
    private formBuilder: FormBuilder
    ) {
      this.formAdd= this.formBuilder.group({
        nombre: new FormControl('', [Validators.required, Validators.minLength(5)] ),
        correo: new FormControl('', [Validators.required]),
        imagen: new FormControl('', [Validators.required]),
        activo: new FormControl('', [Validators.required]),
        
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