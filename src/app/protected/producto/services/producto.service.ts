import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

import { getProductoResponse, Producto, ProductoResponse } from '../interfaces/producto.interface';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  baseUrl : string = environment.baseUrl;

  constructor(private http : HttpClient) { }


  getProductos():Observable<Producto[] | undefined>{
    const url : string = `${this.baseUrl}/productos/`
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')  || '');
    return this.http.get<ProductoResponse>(url, { headers })
            .pipe(
              map( productos => productos.productos)
            )
  }

  crearProducto(producto : Producto ): Observable<Producto>{
    const url : string = `${this.baseUrl}/productos`
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')  || '');
    return this.http.post<Producto>(`${url}`, producto, { headers });
  }

  getProducto(id : string):Observable<Producto>{
    const url : string = `${this.baseUrl}/productos/`
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')  || '');
    return this.http.get<getProductoResponse>(`${url}/${id}`, { headers })
        .pipe(
          map( resp => resp.producto )
        )
  }

  actualizarProducto(id : string, producto : Producto){
    const url : string = `${this.baseUrl}/productos/`
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')  || '');
    return this.http.put<ProductoResponse>(`${url} ${id}`, producto, { headers })
  }

}
