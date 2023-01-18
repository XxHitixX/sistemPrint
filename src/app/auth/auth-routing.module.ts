import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { NuevoUsuarioComponent } from './page/nuevo-usuario/nuevo-usuario.component';

const routes: Routes = [
  {
    
      path: '', 
      children: [
        { path: 'login', component: LoginComponent }, 
        { path: 'nuevoUsuario', component: NuevoUsuarioComponent }, 
        { path: '**', redirectTo: 'login' },

      ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
