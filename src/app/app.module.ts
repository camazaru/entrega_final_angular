import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PublicModule } from './public/public.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './state/app.reducers';
import { EffectsModule } from '@ngrx/effects';

import { EffectsArray } from './state/effects/index';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    EstudiantesModule,
    PublicModule,
    AuthModule,
    HttpClientModule,
    UsuariosModule,
    StoreModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],

  providers: [CookieService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
