import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styles: [
  ]
})
export class CrearClienteComponent implements OnInit {

  cliente: Cliente = {
    cedula: '',
    correo: '',
    direccion: '',
    nombre: '',
    telefono: '',
  };
  id: string | undefined = '';

  constructor(private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    cedula: ['', [Validators.required, Validators.minLength(3)]],
    telefono: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    correo: ['', [Validators.email]],
    direccion: ['']
  })


  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }
    this.activatedRouter.params
      .pipe(
        switchMap(({ id }) => this.clienteService.clienteporID(id))
      )
      .subscribe((cliente) => {
        this.cliente = cliente;
        this.id = this.cliente.id;
        this.miFormulario.controls['nombre'].setValue(this.cliente.nombre);
        this.miFormulario.controls['cedula'].setValue(this.cliente.cedula);
        this.miFormulario.controls['direccion'].setValue(this.cliente.direccion);
        this.miFormulario.controls['telefono'].setValue(this.cliente.telefono);
        this.miFormulario.controls['correo'].setValue(this.cliente.correo);
      });
  }

  /*      this.activatedRouter.params
          .pipe(
            switchMap(({id}) => this.clienteService.clienteporID(id))
          )
          .subscribe( cliente => console.log()/this.cliente = cliente ) 
    } */

  guardar() {

    if (!this.router.url.includes('editar')) {
      this.cliente = {
        nombre: this.miFormulario.controls["nombre"].value,
        cedula: this.miFormulario.controls["cedula"].value,
        telefono: this.miFormulario.controls["telefono"].value,
        correo: this.miFormulario.controls["correo"].value,
        direccion: this.miFormulario.controls["direccion"].value,
      }
      this.clienteService.crearCliente(this.cliente)
        .subscribe(resp => {
          console.log(resp)
          if (resp.ok === true) {
            Swal.fire('Cliente creado con exito', '', 'success');
            this.router.navigateByUrl('/protected/clientes')
          } else {
            Swal.fire('Error', resp.msg, 'error');
          }
        })

    } else {

      this.cliente = {
        id: this.id,
        nombre: this.miFormulario.controls["nombre"].value,
        cedula: this.miFormulario.controls["cedula"].value,
        telefono: this.miFormulario.controls["telefono"].value,
        correo: this.miFormulario.controls["correo"].value,
        direccion: this.miFormulario.controls["direccion"].value,
      }

      this.clienteService.actualizarCliente(this.cliente)
        .subscribe(cliente => {
          Swal.fire('Actualización exitosa.', '', 'success')
        })
      this.router.navigateByUrl('/protected/clientes/')

    }

  }

esValido(campo : string){
  return this.miFormulario.controls[`${campo}`].touched &&
      this.miFormulario.controls[`${campo}`].errors
}


}
