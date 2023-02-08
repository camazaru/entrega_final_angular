import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../../services/cursos/cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent {
  cursosList: any[] | undefined;

  constructor(private api: CursosService, private router: Router) {}

  ngOnInit(): void {
    this.api.getAllCursos().subscribe((data) => {
      this.cursosList = data;
    });
  }

  nuevoCurso() {
    this.router.navigate(['/cursos/agregar']);
  }

  editarCurso(id: any) {
    this.router.navigate(['/cursos/editar', id]);
  }
}
