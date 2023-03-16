import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BuscarCliente, Cliente, ClienteResponse, ClienteResponse2 } from '../interfaces/cliente.interface';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl : string = environment.baseUrl;
  clientes : Cliente[] = [];
  cliente !: Cliente;


  get listaCliente(){
    return { ...this.clientes }
  }

  constructor(private http : HttpClient) { }

  obtenerClientes(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('x-token', token || '');
    return this.http.get<ClienteResponse>(`${this.baseUrl}/clientes`, { headers })
          .pipe(
            tap( clientes => {
              this.clientes = clientes.clientes
            })
          )
  }

  crearCliente( cliente : Cliente ){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('x-token', token || '');
    return this.http.post<ClienteResponse2>(`${this.baseUrl}/clientes`, cliente, { headers })
  }

  clienteporID(id : string):Observable<Cliente>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('x-token', token || '');
    return this.http.get<Cliente>(`${this.baseUrl}/clientes/${id}`, { headers })
  }

  actualizarCliente(cliente : Cliente):Observable<Cliente>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('x-token', token || '');
    return this.http.put<Cliente>(`${this.baseUrl}/clientes/${cliente.id}`, cliente ,{  headers })
  }

  buscarClienteCedula(termino : string){
    return this.http.get<any>(`${this.baseUrl}/buscar/clientes/${termino}`)
  }


}
