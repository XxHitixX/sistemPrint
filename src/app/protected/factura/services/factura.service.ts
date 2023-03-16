import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Factura, FacturaGuardar, FacturaResponse } from '../interfaces/factura.interface';
import { Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Cliente } from '../../cliente/interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {


  cliente !: Cliente;
  baseUrl : string = environment.baseUrl;

  constructor(private http : HttpClient) { }


  getFacturas(){
    return this.http.get<FacturaResponse>(`${this.baseUrl}/facturas/`)
            .pipe(
              map(resp => resp.facturas)
            )
  }


  crearFactura(factura : FacturaGuardar){
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.post<Factura>(`${this.baseUrl}/facturas/`, factura, { headers })
  }



}
