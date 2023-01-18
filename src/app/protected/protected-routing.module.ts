import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ClientesComponent } from './cliente/pages/clientes/clientes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'clientes',
        loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
      },
      {
        path: 'facturas',
        loadChildren: () => import('./factura/factura.module').then(m => m.FacturaModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('./producto/producto.module').then(m => m.ProductoModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
      },
      {
        path: 'categorias',
        loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule)
      },
      { path: '**', redirectTo: 'clientes' },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
