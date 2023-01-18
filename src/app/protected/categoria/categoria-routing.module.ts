import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCategoriaComponent } from './pages/crear-categoria/crear-categoria.component';
import { VerCategoriaComponent } from './pages/ver-categoria/ver-categoria.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'crearCategoria',
        component: CrearCategoriaComponent
      },
      {
        path: 'editarCategoria/:id',
        component: CrearCategoriaComponent
      },
      {
        path: 'verCategoria/:id',
        component: VerCategoriaComponent
      },
      {
        path: 'categorias',
        component: CategoriasComponent
      },
      {
        path: '**',
        redirectTo: 'categorias'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
