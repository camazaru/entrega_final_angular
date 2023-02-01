import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CursosService } from '../../../services/cursos/cursos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:CursosService) { }

datosCurso: any;

  editarForm= new FormGroup({
  nombre: new FormControl(),
  precio: new FormControl(),
  imagen: new FormControl(),
 
})

  ngOnInit(): void {
    let cursoid = this.activerouter.snapshot.paramMap.get('id');
    
    this.api.getSingleCurso(cursoid).subscribe(data => {
      
      this.datosCurso = data[0];

      this.editarForm.setValue({
        'nombre': this.datosCurso.nombre,
        'precio': this.datosCurso.precio,
        'imagen': this.datosCurso.imagen,
        })
    })
  }

  postForm(form:any){
    let cursoid = this.activerouter.snapshot.paramMap.get('id');
    this.api.putCurso(form, cursoid).subscribe(data => { this.router.navigate(['cursos/listar'])})
    

}

eliminar(){
  let cursoid = this.activerouter.snapshot.paramMap.get('id');
  this.api.delete(cursoid).subscribe(data => { this.router.navigate(['cursos/listar'])})
  
    
  }


salir(){
  this.router.navigate(['cursos/listar'])
}}