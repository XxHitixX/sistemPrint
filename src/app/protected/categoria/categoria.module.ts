import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CrearCategoriaComponent } from './pages/crear-categoria/crear-categoria.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { VerCategoriaComponent } from './pages/ver-categoria/ver-categoria.component';
import { FiltroPipe } from './pipes/filtro.pipe';


@NgModule({
  declarations: [
    CrearCategoriaComponent,
    CategoriasComponent,
    VerCategoriaComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoriaModule { }
