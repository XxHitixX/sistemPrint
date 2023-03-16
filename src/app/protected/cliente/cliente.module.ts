import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClienteRoutingModule } from './cliente-routing.module';
import { CrearClienteComponent } from './pages/crear-cliente/crear-cliente.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { VerClienteComponent } from './pages/ver-cliente/ver-cliente.component';
import { FiltroPipe } from './pipes/filtro.pipe';


@NgModule({
  declarations: [
    CrearClienteComponent,
    ClientesComponent,
    VerClienteComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule { }
