import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaRoutingModule } from './factura-routing.module';
import { VerFacturaComponent } from './pages/ver-factura/ver-factura.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { CrearFacturasComponent } from './pages/crear-facturas/crear-facturas.component';


@NgModule({
  declarations: [
    VerFacturaComponent,
    FacturasComponent,
    CrearFacturasComponent
  ],
  imports: [
    CommonModule,
    FacturaRoutingModule
  ]
})
export class FacturaModule { }
