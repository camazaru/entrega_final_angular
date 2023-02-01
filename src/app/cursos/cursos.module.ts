import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { PagesModule } from './pages/pages.module';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CursosRoutingModule,
    PagesModule,
    MaterialModule,
  ]
})
export class CursosModule { }
