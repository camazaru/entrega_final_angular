import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    PagesModule,
    MaterialModule,
  ],
})
export class InscripcionesModule {}
