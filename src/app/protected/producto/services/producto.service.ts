import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

import { Producto, ProductorResponse } from '../interfaces/producto.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  baseUrl : string = environment.baseUrl;


  constructor(private http : HttpClient) { }



  getProductos():Observable<Producto[] | undefined>{
    const url : string = `${this.baseUrl}/productos`
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')  || '');
    return this.http.get<ProductorResponse>(url, { headers })
            .pipe(
              map( productos => productos.productos)
            )
  }

}
