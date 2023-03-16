import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { FacturaRoutingModule } from './factura-routing.module';
import { VerFacturaComponent } from './pages/ver-factura/ver-factura.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { CrearFacturasComponent } from './pages/crear-facturas/crear-facturas.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { NombrePipe } from './pipes/nombre.pipe';


@NgModule({
  declarations: [
    VerFacturaComponent,
    FacturasComponent,
    CrearFacturasComponent,
    FiltroPipe,
    NombrePipe
  ],
  imports: [
    CommonModule,
    FacturaRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacturaModule { }
