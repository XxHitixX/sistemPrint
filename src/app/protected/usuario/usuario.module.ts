import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { VerUsuarioComponent } from './pages/ver-usuario/ver-usuario.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    VerUsuarioComponent,
    CrearUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
