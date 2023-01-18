import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { Categoria, CategoriaResponse } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl : string = environment.baseUrl;

  constructor(private http : HttpClient) { }

  getCategorias():Observable<Categoria[]>{
    const url : string = `${this.baseUrl}/categorias`
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')  || '');
    return this.http.get<CategoriaResponse>(url, { headers })
            .pipe(
              map( categoria => categoria.categorias )
            )
  }

  guardarCategoria(nombre : string){
    const url : string = `${this.baseUrl}/categorias`
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')  || '');
    const body = {
      nombre: nombre,
      usuario: localStorage.getItem('uid')
    }
    return this.http.post<Categoria>(url,body,{ headers })    
  }
}
