import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CrearClienteComponent } from './pages/crear-cliente/crear-cliente.component';
import { VerClienteComponent } from './pages/ver-cliente/ver-cliente.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'crearCliente',
        component: CrearClienteComponent
      },
      {
        path: 'editarCliente/:id',
        component: CrearClienteComponent
      },
      {
        path: 'verCliente',
        component: VerClienteComponent
      },
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: '**',
        redirectTo: 'clientes'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
