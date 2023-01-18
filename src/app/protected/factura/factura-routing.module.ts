import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearFacturasComponent } from './pages/crear-facturas/crear-facturas.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { VerFacturaComponent } from './pages/ver-factura/ver-factura.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'crearFactura',
        component: CrearFacturasComponent
      },
      {
        path: 'verFactura',
        component: VerFacturaComponent
      },
      {
        path: 'facturas',
        component: FacturasComponent
      },
      {
        path: '**',
        redirectTo: 'facturas'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturaRoutingModule { }
