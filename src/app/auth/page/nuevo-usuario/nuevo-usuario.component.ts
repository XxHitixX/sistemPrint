import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../interfaces/usuario.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  constructor(private fb : FormBuilder,
              private authService : AuthService,
              private router : Router) {}

  pattern : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  usuario !: Usuario;

  miFormulario : FormGroup = this.fb.group({
    nombre: ['Ponchito', [Validators.required]],
    correo: ['hilde652@gmail.com', [Validators.pattern(this.pattern), Validators.required]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    rol: ['ADMIN_ROLE']
  })

  save(){
    const { nombre, correo, password, rol } = this.miFormulario.value;
    
    this.authService.crearUsuario(nombre, correo, password, rol)
                    .subscribe(ok => {
                      
                    })
  }


  ngOnInit(): void {
  }

}
