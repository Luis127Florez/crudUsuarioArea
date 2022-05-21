import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
//import { pagenotfoundComponent } from './component/pagenotfoundComponent';

const routes: Routes = [

  { path: '/usuarios', component: UsuariosComponent }
 // {path: '**', component: pagenotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
