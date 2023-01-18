import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PaginadoPipe } from './pipes/paginado.pipe';


@NgModule({
  declarations: [
    CrearProductoComponent,
    VerProductoComponent,
    ProductosComponent,
    PaginadoPipe
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
