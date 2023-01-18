import { Component, OnInit } from '@angular/core';
import { Cliente, ClienteResponse } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {


  clienteResponse !: ClienteResponse;
  clientes !: Cliente[];

  constructor(private clienteService : ClienteService) { }

  ngOnInit(): void {
    this.clienteService.obtenerClientes()
        .subscribe(clientes => {
          this.clienteResponse = clientes
          this.clientes = this.clienteResponse.clientes
        })
  }
}
