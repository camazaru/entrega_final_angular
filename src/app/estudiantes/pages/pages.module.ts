import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { MaterialModule } from '../../shared/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AgregarComponent, EditarComponent, ListarComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [AgregarComponent, EditarComponent, ListarComponent],
})
export class PagesModule {}
