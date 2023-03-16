import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { AuthResponse, Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.baseUrl;
  private _usuario !: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) { }

  crearUsuario(nombre: string, correo: string, password: string, rol: string) {
    const body = { nombre, correo, password, rol }
    return this.http.post<AuthResponse>(`${this.baseUrl}/users`, body);
  }

  loginUsuario(correo: string, password: string) {
    const body = { correo, password }
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, body)
      .pipe(
        tap(respuesta => {
          //Antes estaba if(respuesta === ok)
          if (respuesta) {
            localStorage.setItem('token', respuesta.token!);
            localStorage.setItem('uid', respuesta.usuario?.uid!);
            this._usuario = {
              nombre: respuesta.usuario?.nombre!,
              correo: respuesta.usuario?.correo!,
              password: respuesta.usuario?.password!,
              uid: respuesta.usuario?.uid!
            }
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(false))
      )
  }

  verificarToken(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('x-token', token || '');
    return this.http.get<AuthResponse>(`${this.baseUrl}/auth/validartoken`, { headers })
      /* .pipe(
        map(resp =>  {
          return resp.ok
        }),
        catchError(err => {
          return of(false)
        })
      ) */

  }

  /* 
    verificarUsuario() {
      return this.http.get<AuthResponse>(`${this.baseUrl}/users/${localStorage.getItem('uid')}`)
        .pipe(
          tap(usuario => this._usuario = usuario.usuario!)
        )
    }*/
}

/* Codigo para headers
  const headers = new HttpHeaders()
        .set('x-token', localStorage.getItem('token') || '')
*/
/* 
verificarUsuario(){
    return this.http.get<AuthResponse>(`${this.baseUrl}/users/${localStorage.getItem('uid')}`)
          .pipe(
            tap( usuario => this._usuario = usuario.usuario! )
          )
} */