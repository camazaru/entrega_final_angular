import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { PublicModule } from './public/public.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    EstudiantesModule,
    PublicModule,
    AuthModule,
    HttpClientModule,
    


    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    
  ]
})
export class AppModule { }
