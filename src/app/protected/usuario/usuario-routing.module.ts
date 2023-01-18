import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { VerUsuarioComponent } from './pages/ver-usuario/ver-usuario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'crearUsuario',
        component: CrearUsuarioComponent
      },
      {
        path: 'verUsuario',
        component: VerUsuarioComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: '**',
        redirectTo: 'usuarios'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
