import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../../../services/cursos/cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  formAdd: FormGroup;

  CursosService: any;
  
  constructor(
    private api: CursosService,
    private router: Router
    ) {
      this.formAdd= new FormGroup({
        nombre: new FormControl(),
        precio: new FormControl(),
        imagen: new FormControl(),
           
     })
    }

  ngOnInit(): void {
  }

  postForm(form: any){
    this.api.postCurso(form).subscribe(data => {
      this.router.navigate(['cursos/listar'])
        })
  }
 

  salir(){
    this.router.navigate(['/cursos/listar']);
  }


}