import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { PagesModule } from './pages/pages.module';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    PagesModule,
    MaterialModule,
  ],
  exports: [PagesModule],
})
export class EstudiantesModule {}
