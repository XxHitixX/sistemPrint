import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../interfaces/categoria.interface';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styles: [
  ]
})
export class CrearCategoriaComponent implements OnInit {

  categoria !: Categoria;

  constructor(private fb : FormBuilder,
              private categoriaService : CategoriaService, 
              private activatedRouter : ActivatedRoute,
              private router : Router) { }

  miFormulario : FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  guardar(){
    this.categoriaService.guardarCategoria(this.miFormulario.controls['nombre'].value)
        .subscribe( resp => {
          Swal.fire('Categoria creada exitosamente','','success')
          this.router.navigateByUrl('/protected/categorias')
        } )
  }
}
