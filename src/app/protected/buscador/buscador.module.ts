import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscadorRoutingModule } from './buscador-routing.module';
import { AcabarseComponent } from './pages/acabarse/acabarse.component';


@NgModule({
  declarations: [
    AcabarseComponent
  ],
  imports: [
    CommonModule,
    BuscadorRoutingModule
  ]
})
export class BuscadorModule { }
