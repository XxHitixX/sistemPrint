import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { Categoria, Producto } from '../../interfaces/producto.interface';
import { CategoriaService } from '../../../categoria/services/categoria.service';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styles: [
  ]
})
export class CrearProductoComponent implements OnInit {

  categorias : Categoria[] = [];
  producto !: Producto;

  constructor( private fb : FormBuilder,
               private productoService : ProductoService,
               private categoriaService : CategoriaService,
               private router : Router
               ) { }

  miFormulario : FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    costo: ['', [Validators.required, Validators.min(100)]],
    precio: ['', [Validators.required, Validators.min(100)]],
    proveedor: ['', [Validators.required]],
    existencias: ['', [Validators.required, Validators.min(1)]],
    categoria: ['', [Validators.required]],
    descripcion: ['']

  })

  ngOnInit(): void {
    this.categoriaService.getCategorias()
        .subscribe( categorias => {
          this.categorias = categorias
        } )
  }


  guardar(){
   
    this.producto = {
      nombre: this.miFormulario.controls['nombre'].value,
      costo: this.miFormulario.controls['costo'].value,
      precio: this.miFormulario.controls['precio'].value,
      proveedor: this.miFormulario.controls['proveedor'].value,
      stock: this.miFormulario.controls['existencias'].value,
      categoria: this.miFormulario.controls['categoria'].value,
      descripcion: this.miFormulario.controls['descripcion'].value,

    }

    this.productoService.crearProducto(this.producto)
        .subscribe(producto => {
          Swal.fire('Producto creado exitosamente', '', 'success')
          this.router.navigateByUrl('/protected/productos')
        }); 

  }

  esValido( campo : string) {
    return this.miFormulario.controls[campo].errors 
        && this.miFormulario.controls[campo].touched
  }
}
