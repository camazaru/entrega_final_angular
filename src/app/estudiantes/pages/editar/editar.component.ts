import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstudiantesService } from '../../../services/estudiantes/estudiantes.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
    private api: EstudiantesService
  ) {}

  datosEstudiante: any;

  editarForm = new FormGroup({
    nombre: new FormControl(),
    correo: new FormControl(),
    imagen: new FormControl(),
    activo: new FormControl(),
  });

  ngOnInit(): void {
    let estudianteid = this.activerouter.snapshot.paramMap.get('id');

    this.api.getSingleEstudiante(estudianteid).subscribe((data) => {
      this.datosEstudiante = data[0];

      this.editarForm.setValue({
        nombre: this.datosEstudiante.nombre,
        correo: this.datosEstudiante.correo,
        imagen: this.datosEstudiante.imagen,
        activo: this.datosEstudiante.activo,
      });
    });
  }

  postForm(form: any) {
    let estudianteid = this.activerouter.snapshot.paramMap.get('id');
    this.api
      .putEstudiante(form, estudianteid)
      .subscribe((data) => this.router.navigate(['estudiantes/listar']));
  }

  eliminar() {
    let estudianteid = this.activerouter.snapshot.paramMap.get('id');
    this.api
      .deleteEstudiante(estudianteid)
      .subscribe((data) => this.router.navigate(['estudiantes/listar']));
  }

  salir() {
    this.router.navigate(['estudiantes/listar']);
  }
}
