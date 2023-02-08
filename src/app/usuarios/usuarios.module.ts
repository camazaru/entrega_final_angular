import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { PagesModule } from './pages/pages.module';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UsuariosRoutingModule, PagesModule, MaterialModule],
  exports: [PagesModule],
})
export class UsuariosModule {}
