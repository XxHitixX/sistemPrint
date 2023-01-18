import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder,
              private authService : AuthService,
              private router : Router) { }

  miFormulario : FormGroup = this.fb.group({
    correo: ['test2@test.com', [Validators.email, Validators.required]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  })

  login(){
    console.log(this.miFormulario.value);
    const { correo, password } = this.miFormulario.value;
    this.authService.loginUsuario(correo, password)
        .subscribe( resp => {
          if(resp === true){
            this.router.navigate(['/protected/clientes']);
          }else{
            Swal.fire('Error', 'El usuario y/o la contraseña es incorrecta', 'error')
          }
        })


  }



  ngOnInit(): void {
  }

}
