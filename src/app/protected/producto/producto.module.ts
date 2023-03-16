import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PaginadoPipe } from './pipes/paginado.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearProductoComponent,
    VerProductoComponent,
    ProductosComponent,
    PaginadoPipe
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductoModule { }
