import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/categoria.interface';
import { CategoriaService } from '../../services/categoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styles: [
  ]
})
export class CategoriasComponent implements OnInit {

  categorias !: Categoria[];


  constructor(private categoriaService : CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias()
          .subscribe( categorias => {
            this.categorias = categorias
          })
  }

}
