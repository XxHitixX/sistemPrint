import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styles: [
  ]
})
export class VerProductoComponent implements OnInit {

  producto : Producto = {
    nombre: '',
    stock: 0,    
  };

  constructor(private productoService: ProductoService,
              private activatedRouter: ActivatedRoute,
              private fb : FormBuilder) { }


  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(
        switchMap(({ id }) => this.productoService.getProducto(id)),
      )
      .subscribe(producto => {
        this.producto = producto
        }
      )
  }

}
