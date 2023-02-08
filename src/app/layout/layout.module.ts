import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../shared/material/material.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, MaterialModule, AuthModule],
  exports: [BodyComponent, HeaderComponent, FooterComponent, SidenavComponent],
})
export class LayoutModule {}
