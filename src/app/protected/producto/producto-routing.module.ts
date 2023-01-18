import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'crearProducto',
        component: CrearProductoComponent
      },
      {
        path: 'verProducto',
        component: VerProductoComponent
      },
      {
        path: 'productos',
        component: ProductosComponent
      },
      {
        path: '**',
        redirectTo: 'productos'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
