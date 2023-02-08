import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InscripcionesService } from '../../../services/inscripciones/inscripciones.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
    private api: InscripcionesService
  ) {}

  datosInscripcion: any;

  editarForm = new FormGroup({
    curso: new FormControl(),
    alumno: new FormControl(),
    estatus: new FormControl(),
  });

  ngOnInit(): void {
    let inscripcionid = this.activerouter.snapshot.paramMap.get('id');

    this.api.getSingleInscripcion(inscripcionid).subscribe((data) => {
      this.datosInscripcion = data[0];

      this.editarForm.setValue({
        curso: this.datosInscripcion.curso,
        alumno: this.datosInscripcion.alumno,
        estatus: this.datosInscripcion.estatus,
      });
    });
  }

  postForm(form: any) {
    let inscripcionid = this.activerouter.snapshot.paramMap.get('id');
    this.api.putInscripcion(form, inscripcionid).subscribe((data) => {
      this.router.navigate(['inscripciones/listar']);
    });
  }

  eliminar() {
    let inscripcionid = this.activerouter.snapshot.paramMap.get('id');
    this.api.delete(inscripcionid).subscribe((data) => {
      this.router.navigate(['inscripciones/listar']);
    });
  }

  salir() {
    this.router.navigate(['inscripciones/listar']);
  }
}
