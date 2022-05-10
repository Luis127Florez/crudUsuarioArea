import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PanelDeControlComponent } from './component/compartido/panel-de-control/panel-de-control.component';
import { AreaComponent } from './area/area.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    PanelDeControlComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
